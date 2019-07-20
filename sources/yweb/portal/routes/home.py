from flask import Flask, Blueprint, make_response, redirect, url_for, request, send_from_directory
from flask_mako import render_template, render_template_string
import logging as logging
import os
from datetime import datetime
from portal.library.helpers import jsonview
import requests


""" '/Users/yhb/IdeaProjects/yhb-website/y-web-portal/sources/portal/templates/home' """
temp_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "templates", "home")

'''
    1、blueprint实例 需调用app.register_blueprint注册后才会生效
    2、如果想从其他模块的模板文件夹中调度模板来使用，需要使用template_folder来指明模板的搜寻路径
    同样的，static_folder与static_url_path的功能与template_folder类似

    blueprint实例：
    before_first_request   #第一次请求的处理
    before_reqeust       #注册一个函数来实现对每一个路由请求的拦截
    after_request        #每一次请求之后额处理
    app_context         #上下文环境
'''
blueprint = Blueprint("home", __name__, url_prefix="/home")


@blueprint.route("/index")
def index():
    return send_from_directory(temp_dir, "index.html")