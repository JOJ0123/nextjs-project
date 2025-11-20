export function GET() {
    return Response.json([
        {id: 1, title: "abc", content: "Hello World 1"},
        {id: 2, title: "def", content: "Hello World 2"},
        {id: 3, title: "ghi", content: "Hello World 3"},
    ])
}