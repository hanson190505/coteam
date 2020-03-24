from rest_framework import serializers

from user.models import UserInfo, Customer


class UserInfoSerializer(serializers.ModelSerializer):

	class Meta:
		model = UserInfo
		fields = '__all__'


class UserLoginSerializer(serializers.ModelSerializer):

	class Meta:
		model = UserInfo
		exclude = ['u_password']


class PostUserInfoSerializer(serializers.ModelSerializer):

	class Meta:
		model = UserInfo
		fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):

	class Meta:
		model = Customer
		fields = '__all__'


