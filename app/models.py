from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(null=True)
    phone = models.IntegerField(null=True, blank=True)

@receiver(post_save, sender=User)
def update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()

class Place(models.Model):
    name = models.TextField()
    timevisit = models.IntegerField(null=True, blank=True)
    rating = models.DecimalField(max_digits=10, decimal_places=9, blank=True)
    info = models.TextField()
    placeid = models.TextField()
    def __str__(self):
        return self.name

class Days(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    day = models.CharField(max_length=2, null=True)
    open_t = models.TimeField(null=True)
    close_t = models.TimeField(null=True)

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    review = models.TextField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
