
import os

# 获取当前模块所在的绝对目录
basedir = os.path.dirname(os.path.abspath(__file__))
# 遍历目录下所有.py结尾的文件, 并去掉__init__.py后得到不含后缀的文件名
__all__ = [os.path.splitext(module)[0] for module in os.listdir(basedir) if
           module.endswith(".py") and module != os.path.split(__file__)[-1]]