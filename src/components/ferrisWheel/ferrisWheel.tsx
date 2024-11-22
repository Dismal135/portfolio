import '@/components/ferrisWheel/ferrisWheel.css'

export default function FerrisWheel () {
    return (
        <div className='h-[100vh] flex justify-center items-center'>
        <div className="wheel">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>

      <div className="cabin"></div>
      <div className="cabin"></div>
      <div className="cabin"></div>
      <div className="cabin"></div>
      <div className="cabin"></div>
      <div className="cabin"></div>
    </div>
    </div>
    )
}