from django.shortcuts import get_object_or_404
from .models import Test, Question, Choice, Response
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@login_required
def get_dashboard_data(request):
    tests = list(Test.objects.values('id', 'title'))
    responses = list(Response.objects.filter(user=request.user).values(
        'question__text', 'answer', 'is_correct'))
    return JsonResponse({'tests': tests, 'responses': responses})

@login_required
def get_test_detail(request, test_id):
    test = get_object_or_404(Test, id=test_id)
    questions = Question.objects.filter(test=test)
    q_data = []
    for q in questions:
        choices = list(Choice.objects.filter(question=q).values('id', 'text'))
        q_data.append({
            'id': q.id,
            'text': q.text,
            'question_type': q.question_type,
            'choices': choices
        })
    return JsonResponse({'test': {'id': test.id, 'title': test.title}, 'questions': q_data})

@csrf_exempt
@login_required
def submit_test(request, test_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        test = get_object_or_404(Test, id=test_id)
        questions = Question.objects.filter(test=test)
        for q in questions:
            answer = data.get(str(q.id), '')
            is_correct = answer.strip().lower() == q.correct_answer.strip().lower()
            Response.objects.update_or_create(
                user=request.user,
                question=q,
                defaults={'answer': answer, 'is_correct': is_correct}
            )
        return JsonResponse({'status': 'submitted'})
    return JsonResponse({'error': 'Invalid method'}, status=405)

@login_required
def get_admin_tests(request):
    if not request.user.is_staff:
        return JsonResponse({'error': 'Unauthorized'}, status=403)
    tests = list(Test.objects.filter(created_by=request.user).values('id', 'title', 'created_at'))
    return JsonResponse({'tests': tests})