import React from 'react'

export default function Page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '105vh' }}>
      {/* <embed className='resume' src='https://docs.google.com/document/d/e/2PACX-1vToL9A8kw_RkO5Hil5Ook14D8zT0Ck6ybcj1GMhU5TeFAYzrE2DXmGw7eQQ1pTeDNeC5sGcDPmGWfNI/pub' type="application/pdf" width="90%" height="750vh" /> */}
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vToL9A8kw_RkO5Hil5Ook14D8zT0Ck6ybcj1GMhU5TeFAYzrE2DXmGw7eQQ1pTeDNeC5sGcDPmGWfNI/pub?embedded=true" height='70%'width='75%'></iframe>
    </div>
  );
}