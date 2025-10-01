from django.db import models

# Create your models here.
class Entries(models.Model):
    isizulu = models.CharField(max_length=20)
    english = models.CharField(max_length=20)
    Word_description = models.CharField(max_length=900, default=0)
    Word_usage_isiZulu= models.CharField(max_length=90,default=0)
    Word_usage_english = models.CharField(max_length=90, default=0)
    Commonly_paired_with= models.CharField(max_length=90, default=0)
    Word_frequence= models.IntegerField(default=0)