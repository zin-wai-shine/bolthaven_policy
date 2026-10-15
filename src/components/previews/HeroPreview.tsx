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
      <div className="bg-bgSecondary px-4 py-2.5 border-b border-borderSubtle flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 font-mono text-[11px] text-textSecondary font-medium">
            project_ea / publishing-studio
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-borderSubtle text-[10px] text-textSecondary">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Sandbox Staging
          </span>
          <span className="text-[10px] text-textSecondary font-mono hidden sm:inline">
            v1.2-preview
          </span>
        </div>
      </div>

      {/* Workspace Header */}
      <div className="p-4 border-b border-borderSubtle flex flex-wrap items-center justify-between gap-3 bg-white">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-textPrimary">
              #EA-8920 — Thong Lo Skyline Duplex
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              Ready for Queue
            </span>
          </div>
          <p className="text-textSecondary text-[11px] mt-0.5">
            3 Bed · 3 Bath · 185 sqm · Watthana, Bangkok
          </p>
        </div>

        {/* Channel Selector */}
        <div className="inline-flex p-0.5 bg-bgSecondary border border-borderSubtle rounded-md">
          <button
            type="button"
            onClick={() => setSelectedChannel('tiktok')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              selectedChannel === 'tiktok'
                ? 'bg-white text-textPrimary shadow-xs'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaTiktok className="w-3 h-3 text-[#111827]" />
            <span>TikTok</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedChannel('instagram')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              selectedChannel === 'instagram'
                ? 'bg-white text-textPrimary shadow-xs'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaInstagram className="w-3 h-3 text-[#E1306C]" />
            <span>Instagram</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedChannel('facebook')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              selectedChannel === 'facebook'
                ? 'bg-white text-textPrimary shadow-xs'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <FaFacebook className="w-3 h-3 text-[#1877F2]" />
            <span>Facebook</span>
          </button>
        </div>
      </div>

      {/* Main Studio Body */}
      <div className="grid grid-cols-1 sm:grid-cols-12 divide-y sm:divide-y-0 sm:divide-x divide-borderSubtle">
        {/* Left Column: Property Media (5 cols) */}
        <div className="sm:col-span-5 p-4 space-y-3 bg-bgSecondary/40">
          <div className="flex items-center justify-between text-textSecondary text-[11px]">
            <span className="font-semibold uppercase tracking-wider text-textPrimary">
              Media Assets (4)
            </span>
            <span className="flex items-center gap-1 text-[10px]">
              <FiSliders className="w-3 h-3" /> Auto 9:16
            </span>
          </div>

          {/* Primary Video / Hero Asset */}
          <div className="relative aspect-[9/10] bg-[#111318] rounded-md border border-borderSubtle overflow-hidden flex flex-col justify-between p-3 text-white">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-[10px] font-mono">
                <FiVideo className="w-3 h-3 text-red-400" />
                tour_vertical_01.mp4
              </span>
              <span className="text-[10px] text-gray-300 font-mono">00:32</span>
            </div>

            {/* Architecture Graphic Wireframe Representation */}
            <div className="my-auto text-center space-y-1">
              <div className="inline-block p-2 rounded-full bg-white/10 border border-white/20">
                <FiLayers className="w-5 h-5 text-gray-200" />
              </div>
              <div className="text-[11px] font-medium text-gray-200">
                Duplex Living Room & Terrace
              </div>
              <div className="text-[10px] text-gray-400">1080 &times; 1920 (9:16 Video)</div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-gray-300">
              <span>Agency Watermark: ON</span>
              <span className="text-emerald-400 font-medium">Valid Bitrate</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-white border-2 border-accent rounded p-1 flex flex-col items-center justify-center text-center">
              <FiImage className="w-3.5 h-3.5 text-accent mb-0.5" />
              <span className="text-[9px] font-mono text-textPrimary">Cover.jpg</span>
            </div>
            <div className="aspect-square bg-white border border-borderSubtle rounded p-1 flex flex-col items-center justify-center text-center">
              <FiImage className="w-3.5 h-3.5 text-textSecondary mb-0.5" />
              <span className="text-[9px] font-mono text-textSecondary">Bed_01.jpg</span>
            </div>
            <div className="aspect-square bg-white border border-borderSubtle rounded p-1 flex flex-col items-center justify-center text-center">
              <FiImage className="w-3.5 h-3.5 text-textSecondary mb-0.5" />
              <span className="text-[9px] font-mono text-textSecondary">View.jpg</span>
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
            <div className="p-2.5 rounded-md border border-borderSubtle bg-bgSecondary/60 font-sans text-[11px] leading-relaxed text-textPrimary space-y-1.5">
              <p className="font-medium">
                Experience luxury duplex living in Thong Lo. High-floor corner unit offering
                unobstructed city panoramas, 6m double-height ceilings, and private lift access.
              </p>
              <p className="text-textSecondary">
                &bull; 3 Bedrooms | 3 Bathrooms | 185 SQM
                <br />
                &bull; Direct skywalk to BTS Thong Lo
              </p>
              <p className="text-accent font-medium">
                #BangkokRealEstate #ThongLoLiving #LuxuryCondo #ProjectEA #PropertyTour
              </p>
            </div>

            {/* Publishing Settings Checkbox / Indicators */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[11px] py-1 border-b border-borderSubtle">
                <span className="text-textSecondary">Connected Account</span>
                <span className="font-medium text-textPrimary flex items-center gap-1">
                  @bangkok_prime_realty
                  <FiCheckCircle className="w-3 h-3 text-emerald-600" />
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] py-1 border-b border-borderSubtle">
                <span className="text-textSecondary">API Authorization</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Token Active (OAuth 2.0)
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] py-1">
                <span className="text-textSecondary">Scheduled Dispatch</span>
                <span className="text-[10px] text-textPrimary flex items-center gap-1 font-mono">
                  <FiClock className="w-3 h-3 text-textSecondary" /> Today, 17:30 ICT
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer inside mockup */}
          <div className="pt-3 border-t border-borderSubtle flex items-center justify-between">
            <span className="text-[10px] text-textSecondary italic">
              * Illustrative UI preview
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-[11px] rounded border border-borderSubtle bg-white text-textPrimary font-medium">
                Save Draft
              </span>
              <span className="px-3 py-1 text-[11px] rounded bg-accent text-white font-medium">
                Queue Post
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
