"""
系统配置
"""
import abc
import os
from collections import namedtuple

_Cassandra = namedtuple("_Cassandra", "host port keyspace replicator_factor")
_Flask = namedtuple("_Flask", "host port debug env")
_Weed = namedtuple("_Weed", "host port")


class Config(abc.ABC):
    """
    抽象配置文件, 子类可覆盖后提供单独的实现
    """
    cassandra = _Cassandra(
        host="127.0.0.1",
        port=9042,
        keyspace="y_web_portal",
        replicator_factor=1
    )

    flask = _Flask(
        host="0.0.0.0",
        port=5555,
        debug=True,
        env='development'
    )

    weed = _Weed(
        host="http://127.0.0.1",
        port=80
    )


class Local(Config):
    """
    本地开发环境
    """
    name = "local"


class Development(Config):
    """
    测试环境
    """
    name = "development"


class Production(Config):
    """
    正式环境
    """
    name = "production"


# 获取上下文环境, 默认local
configs = dict(
    local=Local,
    dev=Development,
    prod=Production
)

env = os.getenv('DEMO_ENV', "local")
config = configs[env]
