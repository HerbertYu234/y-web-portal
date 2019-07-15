import importlib
from flask import Flask, request, redirect, render_template
import flask_mako
from flask_mako import MakoTemplates
from portal.config import config
from portal.routes import __all__ as all_routes
import logging as logger


def flaskapp():
    app = Flask(__name__)

    app.env, app.debug = config.flask.env, config.flask.debug

    mako = MakoTemplates(app)

    # 动态注册所有routes下面的模块为blueprint
    for name in all_routes:
        try:
            module = importlib.import_module("portal.routes.{}".format(name))
            if hasattr(module, "blueprint"):
                logger.info("注册Flask路由:{}:{}".format(module.blueprint.name, module.blueprint.url_prefix))
                app.register_blueprint(module.blueprint)
        except Exception as err:
            logger.warning("导入模块:{}失败".format(name), err)

    # 当调用app.run()的时候，用到了Werkzeug库，它会生成一个子进程，当代码有变动的时候它会自动重启
    # 如果在run（）里加入参数 use_reloader=False，就会取消这个功能，当然，在以后的代码改动后也不会自动更新了。
    app.run(host=config.flask.host,
            port=config.flask.port,
            use_reloader=config.flask.debug)


if __name__ == "__main__":
    flaskapp()