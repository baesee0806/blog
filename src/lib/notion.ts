import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export async function fetchNotionData() {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      sorts: [
        {
          property: "날짜",
          direction: "descending",
        },
      ],
    });

    const processedData = await Promise.all(
      response.results.map(async (page: any) => {
        let coverImage = null;

        if (page.cover) {
          switch (page.cover.type) {
            case "external":
              coverImage = page.cover.external.url;
              break;
            case "file":
              coverImage = page.cover.file.url;
              break;
          }
        }

        return {
          id: page.id,
          title: page.properties["이름"]?.title[0]?.plain_text || "제목 없음",
          subheading:
            page.properties["부제목"]?.rich_text[0]?.plain_text || "부제 없음",
          date: page.properties["날짜"]?.date?.start
            ? formatDate(page.properties["날짜"].date.start)
            : null,
          createdTime: formatDate(page.created_time),
          tags:
            page.properties["태그"]?.multi_select?.map(
              (tag: any) => tag.name
            ) || [],
          url: page.public_url,
          coverImage: coverImage,
        };
      })
    );

    return processedData;
  } catch (error) {
    console.error("Notion 데이터 가져오기 실패:", error);
    return [];
  }
}
