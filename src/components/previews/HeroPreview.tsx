import React, { useState } from 'react';
import {
  FiCheckCircle,
  FiClock,
  FiImage,
  FiLayers,
  FiVideo,
  FiSliders,
} from 'react-icons/fi';
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';

export const HeroPreview: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<'tiktok' | 'instagram' | 'facebook'>('tiktok');

  return (
    <div className="w-full bg-white border border-borderSubtle rounded-lg shadow-sm overflow-hidden text-xs text-textPrimary select-none">
      {/* Top Application Bar */}
      <div className="bg-[#0B0D13] px-4 py-3 border-b border-[#232630] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-xs" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-xs" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-xs" />
          <span className="ml-3 font-mono text-[11px] text-gray-400 font-medium tracking-tight">
            bolthaven_os / property-studio
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Sync API
          </span>
          <span className="text-[10px] text-gray-400 font-mono hidden sm:inline px-2 py-0.5 rounded bg-[#181A20] border border-[#232630]">
            v2.4-stable
          </span>
        </div>
      </div>

      {/* Workspace Header */}
      <div className="p-4 sm:p-5 border-b border-borderSubtle flex flex-wrap items-center justify-between gap-3 bg-white">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-bold text-sm sm:text-base text-textPrimary tracking-tight">
              #BH-8920 &bull; Thong Lo Horizon Penthouse
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Verified &amp; Ready
            </span>
          </div>
          <p className="text-textSecondary text-[12px] mt-1 font-medium">
            3 Bed &bull; 3 Bath &bull; 185 sqm &bull; Sukhumvit 55, Bangkok &bull; <span className="text-primary font-bold">฿42,500,000</span>
          </p>
        </div>

        {/* Channel Selector */}
        <div className="inline-flex p-1 bg-bgSecondary border border-borderSubtle rounded-lg shadow-2xs">
          <button
            type="button"
            onClick={() => setSelectedChannel('tiktok')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
              selectedChannel === 'tiktok'
                ? 'bg-white text-textPrimary shadow-sm border border-borderSubtle'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaTiktok className="w-3.5 h-3.5 text-[#111827]" />
            <span>TikTok</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedChannel('instagram')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
              selectedChannel === 'instagram'
                ? 'bg-white text-[#E1306C] shadow-sm border border-borderSubtle'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaInstagram className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Instagram</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedChannel('facebook')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
              selectedChannel === 'facebook'
                ? 'bg-white text-[#1877F2] shadow-sm border border-borderSubtle'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaFacebook className="w-3.5 h-3.5 text-[#1877F2]" />
            <span>Facebook</span>
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="grid grid-cols-1 sm:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-borderSubtle">
        {/* Left Column: Property Media (5 cols) */}
        <div className="sm:col-span-5 p-4 sm:p-5 space-y-3.5 bg-gradient-to-b from-bgSecondary/60 to-bgSecondary/30">
          <div className="flex items-center justify-between text-textSecondary text-[11px]">
            <span className="font-bold uppercase tracking-wider text-textPrimary flex items-center gap-1.5">
              <span>Listing Media</span>
              <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.2 rounded-full font-semibold">4 items</span>
            </span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-textSecondary bg-white border border-borderSubtle px-2 py-0.5 rounded">
              <FiSliders className="w-3 h-3 text-primary" /> 9:16 Video Auto-Fit
            </span>
          </div>

          {/* Primary Video / Hero Asset */}
          <div className="relative aspect-[9/11] bg-gradient-to-br from-[#12141A] via-[#1A1D26] to-[#0D0F14] rounded-xl border border-gray-800 shadow-md overflow-hidden flex flex-col justify-between p-3.5 text-white">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono border border-white/10">
                <FiVideo className="w-3.5 h-3.5 text-primary" />
                tour_penthouse_4k.mp4
              </span>
              <span className="text-[10px] text-gray-300 font-mono bg-black/60 px-2 py-0.5 rounded">00:45</span>
            </div>

            {/* Visual representation */}
            <div className="my-auto text-center space-y-2">
              <div className="relative inline-block">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/40 flex items-center justify-center mx-auto shadow-lg shadow-primary/20 backdrop-blur-sm">
                  <FiLayers className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <div className="text-[12px] font-semibold text-white tracking-wide">
                  Panoramic Living &amp; Sky Terrace
                </div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">2160 &times; 3840 &bull; 60fps &bull; HDR10</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-gray-300 bg-black/40 backdrop-blur-sm p-2 rounded-lg border border-white/5">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Watermark: BoltHaven
              </span>
              <span className="text-emerald-400 font-mono font-medium">1080p Target Verified</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-white border-2 border-primary rounded-lg p-1.5 flex flex-col items-center justify-center text-center shadow-xs cursor-pointer">
              <FiImage className="w-4 h-4 text-primary mb-1" />
              <span className="text-[10px] font-mono font-bold text-textPrimary">Cover.jpg</span>
            </div>
            <div className="aspect-square bg-white border border-borderSubtle hover:border-gray-300 rounded-lg p-1.5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors">
              <FiImage className="w-4 h-4 text-textSecondary mb-1" />
              <span className="text-[10px] font-mono text-textSecondary">Master.jpg</span>
            </div>
            <div className="aspect-square bg-white border border-borderSubtle hover:border-gray-300 rounded-lg p-1.5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors">
              <FiImage className="w-4 h-4 text-textSecondary mb-1" />
              <span className="text-[10px] font-mono text-textSecondary">Balcony.jpg</span>
            </div>
          </div>
        </div>

        {/* Right Column: Content Editor & Settings (7 cols) */}
        <div className="sm:col-span-7 p-4 space-y-4 bg-white flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-textPrimary uppercase tracking-wider">
                Post Caption & Tags
              </span>
              <span className="text-[10px] font-mono text-textSecondary">
                184 / 2,200 chars
              </span>
            </div>

            {/* Simulated Post Text Box */}
            <div className="p-3 rounded-lg border border-borderSubtle bg-bgSecondary/60 font-sans text-[11px] leading-relaxed text-textPrimary space-y-1.5 shadow-2xs">
              <p className="font-semibold text-textPrimary">
                Spectacular Sky Penthouse at Horizon Thong Lo. Unmatched 270&deg; skyline views, double-volume living area, and private pool deck.
              </p>
              <p className="text-textSecondary text-[11px]">
                &bull; 3 Bed &bull; 3 Bath &bull; 185 SQM &bull; Private Lift
                <br />
                &bull; Prime Thong Lo BTS connection
              </p>
              <p className="text-primary font-semibold text-[11px]">
                #BoltHaven #BangkokRealEstate #LuxuryPenthouse #ThongLoLiving #PropertyTour
              </p>
            </div>

            {/* Publishing Settings Checkbox / Indicators */}
            <div className="space-y-2 pt-1 text-[11px]">
              <div className="flex items-center justify-between py-1 border-b border-borderSubtle">
                <span className="text-textSecondary">Connected Agency Account</span>
                <span className="font-semibold text-textPrimary flex items-center gap-1">
                  @bolthaven_thailand
                  <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-borderSubtle">
                <span className="text-textSecondary">OAuth 2.0 Token Scope</span>
                <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  video.upload &bull; creator.info
                </span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-textSecondary">Publishing Schedule</span>
                <span className="text-[11px] text-textPrimary flex items-center gap-1.5 font-mono font-medium">
                  <FiClock className="w-3.5 h-3.5 text-primary" /> Today, 17:30 ICT (Automated)
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer inside mockup */}
          <div className="pt-3.5 border-t border-borderSubtle flex items-center justify-between">
            <span className="text-[10px] text-textSecondary flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Live Pipeline Active
            </span>
            <div className="flex items-center gap-2">
              <button type="button" className="px-3 py-1.5 text-[11px] rounded-md border border-borderSubtle bg-white text-textPrimary font-semibold hover:bg-bgSecondary transition-colors">
                Save Draft
              </button>
              <button type="button" className="px-3.5 py-1.5 text-[11px] rounded-md bg-primary text-white font-semibold hover:bg-primary-hover shadow-xs transition-colors">
                Queue to TikTok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
