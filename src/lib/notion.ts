// // lib/notion.ts
// import { NotionAPI } from "notion-client";

// // 비공식 NotionAPI 클라이언트 초기화
// export const notion = new NotionAPI();

// // 데이터베이스 또는 페이지 ID
// const notionPageId = process.env.NOTION_DATABASE_ID;

// export async function getAllPosts() {
//   try {
//     // 전체 페이지 데이터 가져오기
//     const pageData = await notion.getPage(notionPageId as string);

//     // pageData에서 필요한 정보 추출 및 가공
//     // 주의: 이 데이터 구조는 공식 API와 다르므로 적절히 변환해야 함
//     const blocks = Object.values(pageData.block);
//     console.log(blocks.map((block) => block.value?.type));

//     // 페이지 내의 데이터베이스 블록이나 다른 구조에 따라 로직 구현 필요
//     const posts = blocks
//       .filter(
//         (block) =>
//           block.value?.type === "page" && block.value.parent_id === notionPageId
//       )
//       .map((block) => {
//         const id = block.value.id;
//         const title = block.value.properties?.title?.[0]?.[0] || "제목 없음";

//         // 여기서 각 페이지의 다른 속성을 추출해야 함 (날짜, 태그 등)
//         // 이는 페이지 내부 구조에 따라 달라질 수 있음

//         return {
//           id,
//           title,
//           description: "", // 페이지에서 추출 필요
//           date: "", // 페이지에서 추출 필요
//           tags: [], // 페이지에서 추출 필요
//           slug: id.replace(/-/g, ""),
//         };
//       });

//     return posts;
//   } catch (error) {
//     console.error("Error fetching data from Notion:", error);
//     return [];
//   }
// }

// export async function getPostContent(pageId: string) {
//   try {
//     // 특정 페이지 콘텐츠 가져오기
//     const recordMap = await notion.getPage(pageId);
//     return recordMap;
//   } catch (error) {
//     console.error(`Error fetching page ${pageId}:`, error);
//     return null;
//   }
// }

import { Client } from "@notionhq/client";

const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getPosts() {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    sorts: [
      {
        property: "period", // 정렬의 기준이 될 데이터베이스 속성
        direction: "descending", // 내림차순 : descending, 오름차순 : ascending
      },
    ],
  });

  return response.results;
}
