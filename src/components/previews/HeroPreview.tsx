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
      <div className="p-4 sm:p-5 border-b border-borderSubtle flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-base text-textPrimary tracking-tight">
              #BH-8920 &bull; Thong Lo Horizon Penthouse
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              Verified &amp; ready
            </span>
          </div>
          <p className="text-textSecondary text-xs">
            3 Bed &bull; 3 Bath &bull; 185 sqm &bull; Sukhumvit 55, Bangkok &bull; <span className="text-primary font-bold">฿42,500,000</span>
          </p>
        </div>

        {/* Channel Selector */}
        <div className="inline-flex p-1 bg-bgSecondary border border-borderSubtle rounded-lg self-start md:self-center">
          <button
            type="button"
            onClick={() => setSelectedChannel('tiktok')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              selectedChannel === 'tiktok'
                ? 'bg-white text-textPrimary shadow-xs border border-borderSubtle font-semibold'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaTiktok className="w-3.5 h-3.5 text-[#111827]" />
            <span>TikTok</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedChannel('instagram')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              selectedChannel === 'instagram'
                ? 'bg-white text-[#E1306C] shadow-xs border border-borderSubtle font-semibold'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaInstagram className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>Instagram</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedChannel('facebook')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              selectedChannel === 'facebook'
                ? 'bg-white text-[#1877F2] shadow-xs border border-borderSubtle font-semibold'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaFacebook className="w-3.5 h-3.5 text-[#1877F2]" />
            <span>Facebook</span>
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-borderSubtle">
        {/* Left Column: Property Media (5 cols) */}
        <div className="md:col-span-5 p-4 sm:p-5 space-y-4 bg-gradient-to-b from-bgSecondary/60 to-bgSecondary/30 flex flex-col justify-between">
          <div className="space-y-3.5">
            {/* Header row with badges */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-textPrimary">
                  Listing media
                </span>
                <span className="text-[11px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-medium">
                  4 items
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-textSecondary bg-white border border-borderSubtle px-2.5 py-1 rounded-md shadow-2xs">
                <FiSliders className="w-3.5 h-3.5 text-primary" />
                <span>9:16 Video</span>
              </span>
            </div>

            {/* Primary Video / Hero Asset */}
            <div className="relative aspect-[9/11] bg-gradient-to-br from-[#12141A] via-[#1A1D26] to-[#0D0F14] rounded-xl border border-gray-800 shadow-sm overflow-hidden flex flex-col justify-between p-3.5 text-white">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono border border-white/10">
                  <FiVideo className="w-3.5 h-3.5 text-primary" />
                  tour_penthouse_4k.mp4
                </span>
                <span className="text-[11px] text-gray-300 font-mono bg-black/60 px-2 py-0.5 rounded">00:45</span>
              </div>

              {/* Visual representation */}
              <div className="my-auto text-center space-y-2 py-4">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 flex items-center justify-center mx-auto shadow-md">
                  <FiLayers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white tracking-wide">
                    Panoramic Living &amp; Sky Terrace
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono mt-0.5">2160 &times; 3840 &bull; 60fps &bull; HDR10</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-300 bg-black/40 backdrop-blur-sm p-2 rounded-lg border border-white/5">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Watermark: BoltHaven
                </span>
                <span className="text-emerald-400 font-mono font-medium text-[10px]">1080p verified</span>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2.5 pt-1">
            <button type="button" className="py-2.5 px-1 bg-white border-2 border-primary rounded-lg flex flex-col items-center justify-center text-center shadow-xs transition-transform active:scale-95">
              <FiImage className="w-4 h-4 text-primary mb-1" />
              <span className="text-[11px] font-medium text-textPrimary truncate max-w-full">Cover.jpg</span>
            </button>
            <button type="button" className="py-2.5 px-1 bg-white border border-borderSubtle hover:border-gray-300 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
              <FiImage className="w-4 h-4 text-textSecondary mb-1" />
              <span className="text-[11px] font-medium text-textSecondary truncate max-w-full">Master.jpg</span>
            </button>
            <button type="button" className="py-2.5 px-1 bg-white border border-borderSubtle hover:border-gray-300 rounded-lg flex flex-col items-center justify-center text-center transition-colors">
              <FiImage className="w-4 h-4 text-textSecondary mb-1" />
              <span className="text-[11px] font-medium text-textSecondary truncate max-w-full">Balcony.jpg</span>
            </button>
          </div>
        </div>

        {/* Right Column: Content Editor & Settings (7 cols) */}
        <div className="md:col-span-7 p-4 sm:p-5 space-y-4 bg-white flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-textPrimary">
                Post caption &amp; hashtags
              </span>
              <span className="text-xs font-mono text-textSecondary">
                184 / 2,200 chars
              </span>
            </div>

            {/* Simulated Post Text Box */}
            <div className="p-3.5 rounded-lg border border-borderSubtle bg-bgSecondary/60 font-sans text-xs leading-relaxed text-textPrimary space-y-2 shadow-2xs">
              <p className="font-semibold text-textPrimary">
                Spectacular Sky Penthouse at Horizon Thong Lo. Unmatched 270&deg; skyline views, double-volume living area, and private pool deck.
              </p>
              <p className="text-textSecondary text-xs">
                &bull; 3 Bed &bull; 3 Bath &bull; 185 SQM &bull; Private Lift
                <br />
                &bull; Prime Thong Lo BTS connection
              </p>
              <p className="text-primary font-medium text-xs">
                #BoltHaven #BangkokRealEstate #LuxuryPenthouse #ThongLoLiving #PropertyTour
              </p>
            </div>

            {/* Publishing Settings Checkbox / Indicators */}
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-borderSubtle">
                <span className="text-textSecondary">Connected agency account</span>
                <span className="font-semibold text-textPrimary flex items-center gap-1.5">
                  @bolthaven_thailand
                  <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-borderSubtle">
                <span className="text-textSecondary">OAuth 2.0 token scope</span>
                <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  video.upload &bull; creator.info
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-textSecondary">Publishing schedule</span>
                <span className="text-xs text-textPrimary flex items-center gap-1.5 font-mono font-medium">
                  <FiClock className="w-3.5 h-3.5 text-primary" /> Today, 17:30 ICT (Automated)
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer inside mockup */}
          <div className="pt-4 border-t border-borderSubtle flex items-center justify-between gap-3">
            <span className="text-xs text-textSecondary flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live pipeline active
            </span>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="px-4 py-2 text-xs rounded-md border border-borderSubtle bg-white text-textPrimary font-semibold hover:bg-bgSecondary transition-colors shadow-2xs"
              >
                Save draft
              </button>
              <button
                type="button"
                className="px-4 py-2 text-xs rounded-md bg-primary text-white font-semibold hover:bg-primary-hover shadow-sm transition-all"
              >
                Queue to TikTok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
