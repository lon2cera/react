function paging(totalCount, pageNum, amount) {
  let endPage=Math.ceil((pageNum/10))*10;
  const startPage=endPage-9;  // 시작 페이지 번호
  const realEnd=Math.ceil(totalCount/amount);
  if (realEnd<endPage) {
    endPage=realEnd;
  }
  // 이전 버튼 활성화 유무
  const prev=startPage>1;
  const next=endPage<realEnd;

  return{
    startPage : startPage,
    endPage : endPage,
    prev : prev,
    next : next
  }
}

export default paging;