# 文章

## 文章(article)结构

#### json结构

```
{
	"id": 1234454,
	"title": "彭德怀元帅",
	"content": "彭德怀元帅是我党卓越的领导人，是伟大的无产阶级革命家、军事家。",
	"tags":[{
			id: 15
	}],
	"visit_count": 20,
	"comment_count":20,
	"top":false,
	"status":0,
	"released_at": null,
	"created_at": "2016-07-05T17:02:21+08:00",
	"updated_at": "2016-07-05T17:02:21+08:00"
}

```
#### 字段说明

* 文章结构

| 参数 | 类型 | 必须| 说明 |
|:---|---|---|---|
|id  |int|是||
|title |string|是|文章标题|
|content|string|是|文章内容|
|tags|array|否|标签|
|visit_count |int|否|阅读数量|
|comment_count |int|否|评论数量|
|top|bool|否|是否置顶|
|status|int|否|文章状态,0-草稿,1-发布|
|released_at|time|否|发布时间|
|created_at|time|是|创建时间|
|updated_at|time|是|更新时间|

## 获取文章列表

#### 方法
`GET` `/article/list`

#### 功能
获取视频列表

#### 参数
| 参数   | 类型 | 必选 |  说明 |
|:--- | --- | ---  | --- |
|page|int|否|页数,默认第一页|
|perPage|int|否|每页最多数量|
|order|string|否|排序方式，asc - 升序，desc - 降序，默认值为降序|
|sort|string|否|排序依据，默认值为created_at|
|title|string|否|按照标题模糊搜索|

#### 返回结果
```
{
	"data": [
		{
			"id": 1234454,
			"title": "彭德怀元帅",
			"content": "彭德怀元帅是我党卓越的领导人，是伟大的无产阶级革命家、军事家。",
			"tags":[{
					id: 15
			}],
			"visit_count": 20,
			"comment_count":20,
			"top":false,
			"status":0,
			"released_at": null,
			"created_at": "2016-07-05T17:02:21+08:00",
			"updated_at": "2016-07-05T17:02:21+08:00"
		}
	],
	"total": 10
}

```

