Mock.mock('/issues/find', {
    'success': "true",
    'total': 5,
    'totalsMap': 'null',
    'list|5': [
        {
            'app': {
                'appName': '@word',
                'gitlabURL': '@domain',
                'id': '@id',
                'name|1': [
                    '移动应用',
                    '无线采集',
                    '基础平台',
                    '公司网站'
                ]
            },
            'createTime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'creator': {
                'email': '@email',
                'name': '@cname'
            },
            'creatorId': '@id',
            'isPrivate|1': true,
            'operator': {
                'email': '@email',
                'name': '@cname'
            },
            'operatorId': '@id',
            'planFinishTime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'planStartTime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'project': {
                'id': '@id',
                'name|1': [
                    'Wideatech',
                    '泰华燃气',
                    '泰达津联',
                    '滨海投资',
                    '生态城',
                    '西青燃气'
                ]
            },
            'rate|1-100': 100,
            'readTime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'title': '@ctitle',
            'updateTime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'loginUser': {
                'id': '@id',
                'name': '@cname',
                'orgName|1': [
                    '软件研发部',
                    '万维佳和北京分部'
                ]
            }

        }
    ]
})