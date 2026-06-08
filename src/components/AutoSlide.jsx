import { FiCamera, FiCode, FiServer, FiVideo } from 'react-icons/fi'
const marqueeItems = [
  { icon: FiCode, label: 'Web Development' },
  { icon: FiCamera, label: 'Graphic Design' },
  { icon: FiVideo, label: 'Video Editing' },
  { icon: FiServer, label: 'Network and Server Management' },
  { icon: FiCamera, label: 'Photography' },
]

const AutoSlide = () => {
  return (
    <div>
        
      <div className="mt-12 border-t border-white/12 pt-6 md:mt-14">
        <div className="relative overflow-hidden border-y border-white/12 bg-white/[0.03] px-1 py-4">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map(({ icon: Icon, label }, index) => (
              <div
                key={`${label}-${index}`}
                className="inline-flex min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[1.02rem] font-medium text-white/95 shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]"
              >
                <Icon className="text-[1.2rem]" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutoSlide