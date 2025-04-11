# from django.urls import path
# from . import views

# urlpatterns = [
#     path('api/dashboard/', views.get_dashboard_data),
#     path('api/test/<int:test_id>/', views.get_test_detail),
#     path('api/test/<int:test_id>/submit/', views.submit_test),
#     path('api/admin/tests/', views.get_admin_tests),
# ]

from django.urls import path
from . import views

urlpatterns = [
    path("dashboard/", views.dashboard),
    path("test/<int:test_id>/", views.get_test),
    path("test/<int:test_id>/submit/", views.submit_test),
    path("admin/tests/", views.admin_tests),
]
