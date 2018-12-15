#!/usr/bin/env python
#coding=utf-8

'''
@Desc
    队列只是一个容纳List的容器，这个容器是线程安全的。故多此一举

    维护三个队列：
    FloorQueue     存放一级目录 url 链接的队列
    MiddleQueue    存放二级目录 url 链接的队列
    ContentQueue   存放获取电影信息(名称、导演、主角、下载地址等)的队列, 方便后续持久化

    存放未爬取 url 的队列
    存放
'''
from queue import Queue


class TaskQueue(object):

    #将三层队列初始化
    floorQueue = Queue()
    middleQueue = Queue()
    contentQueue = Queue(200)   #定义一个有上限的队列，存储信息复杂的item；大大减少内存的开销

    def __init__(self):
        pass

    # get queue
    @classmethod
    def getFloorQueue(cls):
        return cls.floorQueue

    @classmethod
    def getMiddleQueue(cls):
        return cls.middleQueue

    @classmethod
    def getContentQueue(cls):
        return cls.contentQueue


    # Return True if the queue is empty, False otherwise (not reliable!).
    @classmethod
    def isFloorQueueEmpty(cls):
        return cls.floorQueue.empty()

    @classmethod
    def isMiddleQueueEmpty(cls):
        return cls.middleQueue.empty()

    @classmethod
    def isContentQueueEmpty(cls):
        return cls.contentQueue.empty()


    @classmethod
    def isContentQueueFull(cls):
        return cls.contentQueue.full()


    # Put an item into the queue.
    @classmethod
    def putToFloorQueue(cls, item):
        cls.floorQueue.put(item)

    @classmethod
    def putToMiddleQueue(cls, item):
        cls.middleQueue.put(item)

    @classmethod
    def putToContentQueue(cls, item):
        cls.contentQueue.put(item)

