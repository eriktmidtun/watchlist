from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from rest_framework import serializers

User._meta.get_field('email')._unique = True


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','email', 'first_name','last_name',)


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','email', 'password','first_name','last_name',)
        extra_kwargs = {'password': {'write_only': True}, 'first_name': {'required': True},'last_name': {'required': True}}
    

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")