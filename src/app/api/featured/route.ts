import { NextApiRequest, NextApiResponse } from "next"

export interface APIResponse<T> {
    message: string,
    data: T
}

interface IArticleInfo {
    id: string,
    title: string,
    thumbnail: string,
    url: string
}

interface IFeaturedArticles {
    articles: Array<IArticleInfo>
}

export function GET(request: Request) {
    let res = new Response()
    return Response.json({ error: 'Internal Server Error' }, { status: 300 })

}