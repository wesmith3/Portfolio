import './page.css'

export default function Page() {
  return (
    <div>
      <h1 className='resume-title'>Resume</h1>
    <div className='container'>
      {/* <embed className='resume' src='https://docs.google.com/document/d/e/2PACX-1vToL9A8kw_RkO5Hil5Ook14D8zT0Ck6ybcj1GMhU5TeFAYzrE2DXmGw7eQQ1pTeDNeC5sGcDPmGWfNI/pub' type="application/pdf" width="90%" height="750vh" /> */}
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vToL9A8kw_RkO5Hil5Ook14D8zT0Ck6ybcj1GMhU5TeFAYzrE2DXmGw7eQQ1pTeDNeC5sGcDPmGWfNI/pub?embedded=true" height='80%'width='75%'></iframe>
    </div>
    </div>
  );
}