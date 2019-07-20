import flask
from functools import wraps


def jsonview(func):
    """
    将flask路由器返回json视图
    """

    @wraps(func)
    def _wrapper(*args, **kwargs):
        resp = flask.jsonify(func(*args, **kwargs))
        return resp if isinstance(resp, flask.Response) \
            else flask.Response(resp,
                                mimetype="application/json",
                                content_type="application/json,charset=UTF-8")

    return _wrapper