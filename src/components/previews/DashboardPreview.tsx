import React, { useState } from 'react';
import {
  FiUploadCloud,
  FiCalendar,
  FiSmartphone,
  FiGrid,
  FiChevronRight,
} from 'react-icons/fi';
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tiktok' | 'instagram' | 'facebook'>('tiktok');
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'feed'>('mobile');

  return (
    <div className="w-full bg-white border border-borderSubtle rounded-xl shadow-sm overflow-hidden text-xs text-textPrimary">
      {/* Top System Bar */}
      <div className="bg-[#111318] text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-borderSubtle/20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="font-semibold text-sm tracking-tight">Project_EA Workstation</span>
          </div>
          <span className="text-gray-400">/</span>
          <span className="text-gray-300 font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded">
            Agency ID: BKK-CORE-01
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-gray-200">OAuth Credentials Validated</span>
          </div>
          <span className="text-[10px] text-gray-400 font-mono hidden md:inline">
            Timezone: Asia/Bangkok (UTC+7)
          </span>
        </div>
      </div>

      {/* Workspace Secondary Navigation */}
      <div className="bg-bgSecondary px-4 sm:px-6 py-2.5 border-b border-borderSubtle flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-xs">
          <span className="font-semibold text-textPrimary flex items-center gap-1.5">
            <FiGrid className="w-3.5 h-3.5 text-accent" />
            Active Batch: Luxury Residences Q4
          </span>
          <span className="hidden sm:inline text-textSecondary">&bull;</span>
          <span className="text-textSecondary hidden sm:inline">
            Status: <span className="text-emerald-700 font-medium">Ready for Dispatch</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-textSecondary bg-white border border-borderSubtle px-2 py-1 rounded">
            Queue: 4 Scheduled
          </span>
          <span className="text-[11px] text-textSecondary bg-white border border-borderSubtle px-2 py-1 rounded">
            Audit Log: #4928
          </span>
        </div>
      </div>

      {/* Main 3-Column Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-borderSubtle">
        {/* Left Column: Property Media Assets (3 cols) */}
        <div className="lg:col-span-3 p-4 space-y-4 bg-bgSecondary/30">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-textPrimary text-[11px] uppercase tracking-wider">
              Property Assets
            </span>
            <span className="text-[10px] text-textSecondary font-mono">5 Files</span>
          </div>

          {/* Selected Listing Summary Card */}
          <div className="bg-white p-3 rounded-lg border border-borderSubtle space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-textPrimary text-xs">#EA-9021</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">
                Penthouse
              </span>
            </div>
            <div className="text-xs font-semibold text-textPrimary">
              Asoke Modern Luxury Penthouse
            </div>
            <p className="text-[11px] text-textSecondary leading-tight">
              Sukhumvit 21, Khlong Toei Nuea, Bangkok
            </p>
            <div className="pt-2 border-t border-borderSubtle grid grid-cols-3 gap-1 text-[10px] text-textSecondary text-center">
              <div className="bg-bgSecondary p-1 rounded">
                <span className="block font-semibold text-textPrimary">210</span> sqm
              </div>
              <div className="bg-bgSecondary p-1 rounded">
                <span className="block font-semibold text-textPrimary">3</span> Bed
              </div>
              <div className="bg-bgSecondary p-1 rounded">
                <span className="block font-semibold text-textPrimary">฿34.5M</span> Price
              </div>
            </div>
          </div>

          {/* Media Files List */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-lg border-2 border-accent bg-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-dark flex items-center justify-center text-white font-mono text-[9px]">
                  9:16
                </div>
                <div>
                  <div className="font-medium text-[11px] text-textPrimary truncate max-w-[130px]">
                    tour_interior_full.mp4
                  </div>
                  <div className="text-[10px] text-textSecondary">0:45 &bull; 1080p</div>
                </div>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium text-[9px]">
                Primary
              </span>
            </div>

            <div className="p-2 rounded-lg border border-borderSubtle bg-white flex items-center justify-between opacity-80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-textSecondary font-mono text-[9px]">
                  1:1
                </div>
                <div>
                  <div className="font-medium text-[11px] text-textPrimary truncate max-w-[130px]">
                    living_terrace_view.jpg
                  </div>
                  <div className="text-[10px] text-textSecondary">1440 &times; 1440</div>
                </div>
              </div>
              <span className="text-[10px] text-textSecondary font-mono">Ready</span>
            </div>

            <div className="p-2 rounded-lg border border-borderSubtle bg-white flex items-center justify-between opacity-80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-textSecondary font-mono text-[9px]">
                  1:1
                </div>
                <div>
                  <div className="font-medium text-[11px] text-textPrimary truncate max-w-[130px]">
                    master_suite_bath.jpg
                  </div>
                  <div className="text-[10px] text-textSecondary">1440 &times; 1440</div>
                </div>
              </div>
              <span className="text-[10px] text-textSecondary font-mono">Ready</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="w-full py-2 border border-dashed border-borderSubtle rounded-lg flex items-center justify-center gap-1.5 text-textSecondary hover:border-gray-400 bg-white cursor-pointer">
              <FiUploadCloud className="w-3.5 h-3.5" />
              <span className="text-[11px]">Upload Listing Media</span>
            </div>
          </div>
        </div>

        {/* Center Column: Content Editor & Platform Tabs (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-5 space-y-4 bg-white flex flex-col justify-between">
          <div className="space-y-4">
            {/* Channel Tabs */}
            <div className="flex items-center justify-between border-b border-borderSubtle pb-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('tiktok')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-xs transition-colors ${
                    activeTab === 'tiktok'
                      ? 'bg-dark text-white'
                      : 'text-textSecondary hover:text-textPrimary bg-bgSecondary'
                  }`}
                >
                  <FaTiktok className="w-3 h-3" />
                  <span>TikTok</span>
                  <span className="ml-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('instagram')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-xs transition-colors ${
                    activeTab === 'instagram'
                      ? 'bg-dark text-white'
                      : 'text-textSecondary hover:text-textPrimary bg-bgSecondary'
                  }`}
                >
                  <FaInstagram className="w-3 h-3 text-[#E1306C]" />
                  <span>Instagram</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('facebook')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-xs transition-colors ${
                    activeTab === 'facebook'
                      ? 'bg-dark text-white'
                      : 'text-textSecondary hover:text-textPrimary bg-bgSecondary'
                  }`}
                >
                  <FaFacebook className="w-3 h-3 text-[#1877F2]" />
                  <span>Facebook</span>
                </button>
              </div>

              <span className="text-[10px] text-textSecondary">
                Mode: <span className="font-medium text-textPrimary">Channel-Specific</span>
              </span>
            </div>

            {/* Template Variables Helper */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 text-[10px] text-textSecondary">
              <span className="font-medium text-textPrimary whitespace-nowrap">
                Variables:
              </span>
              <span className="px-1.5 py-0.5 rounded bg-bgSecondary border border-borderSubtle font-mono">
                {'{title}'}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-bgSecondary border border-borderSubtle font-mono">
                {'{sqm}'}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-bgSecondary border border-borderSubtle font-mono">
                {'{bedrooms}'}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-bgSecondary border border-borderSubtle font-mono">
                {'{district}'}
              </span>
            </div>

            {/* Structured Caption Editor */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold text-textPrimary uppercase tracking-wider">
                Video Caption & Metadata
              </label>
              <div className="border border-borderSubtle rounded-lg p-3 bg-bgSecondary/30 focus-within:border-accent space-y-2">
                <textarea
                  readOnly
                  rows={4}
                  className="w-full bg-transparent resize-none border-none p-0 text-xs text-textPrimary focus:ring-0 leading-relaxed font-sans"
                  value={`Step inside this Asoke Penthouse retreat. 210 sqm of bespoke luxury with private sky terrace and panoramic city views.\n\nKey Specs:\n• 3 En-Suite Bedrooms | 4 Bathrooms\n• Private Lift Foyer\n• Listed at ฿34,500,000`}
                />
                <div className="pt-2 border-t border-borderSubtle/60 flex flex-wrap gap-1 text-[10px] font-mono text-accent">
                  <span>#BangkokProperty</span>
                  <span>#AsokePenthouse</span>
                  <span>#LuxuryLiving</span>
                  <span>#RealEstateThailand</span>
                  <span>#ProjectEA</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-textSecondary px-1">
                <span>Platform requirement: Video title + tags</span>
                <span>218 / 2,200 chars</span>
              </div>
            </div>

            {/* Channel Publishing Parameters */}
            <div className="bg-bgSecondary p-3 rounded-lg border border-borderSubtle space-y-2">
              <div className="text-[11px] font-semibold text-textPrimary">
                Channel Settings
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center justify-between bg-white p-2 rounded border border-borderSubtle">
                  <span className="text-textSecondary">Audio Sync</span>
                  <span className="font-medium text-textPrimary">Original Audio</span>
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-borderSubtle">
                  <span className="text-textSecondary">Privacy Level</span>
                  <span className="font-medium text-textPrimary">Public</span>
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-borderSubtle">
                  <span className="text-textSecondary">Duet / Stitch</span>
                  <span className="font-medium text-textPrimary">Allowed</span>
                </div>
                <div className="flex items-center justify-between bg-white p-2 rounded border border-borderSubtle">
                  <span className="text-textSecondary">Commercial Disclosure</span>
                  <span className="font-medium text-emerald-700">Declared</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-borderSubtle flex items-center justify-between">
            <span className="text-[10px] text-textSecondary">
              Last saved: 2 mins ago
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-3 py-1.5 rounded border border-borderSubtle text-xs font-medium text-textPrimary hover:bg-bgSecondary"
              >
                Save Draft
              </button>
              <button
                type="button"
                className="px-3.5 py-1.5 rounded bg-accent text-white text-xs font-medium hover:bg-accent-hover"
              >
                Schedule Dispatch
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Feed Preview & Publishing Queue (4 cols) */}
        <div className="lg:col-span-4 p-4 space-y-4 bg-bgSecondary/20">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-textPrimary text-[11px] uppercase tracking-wider">
              Feed Preview & Queue
            </span>
            <div className="flex items-center gap-1 bg-white border border-borderSubtle rounded p-0.5">
              <button
                type="button"
                onClick={() => setPreviewDevice('mobile')}
                className={`p-1 rounded ${
                  previewDevice === 'mobile' ? 'bg-bgSecondary text-textPrimary' : 'text-textSecondary'
                }`}
                title="Mobile View"
              >
                <FiSmartphone className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={() => setPreviewDevice('feed')}
                className={`p-1 rounded ${
                  previewDevice === 'feed' ? 'bg-bgSecondary text-textPrimary' : 'text-textSecondary'
                }`}
                title="Feed View"
              >
                <FiGrid className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Simulated Mobile Feed Card */}
          <div className="mx-auto max-w-[240px] bg-dark rounded-xl p-2.5 text-white shadow-xs space-y-2 border border-dark-border">
            <div className="flex items-center justify-between text-[10px] text-gray-400 pb-1 border-b border-white/10">
              <span className="flex items-center gap-1">
                <FaTiktok className="w-2.5 h-2.5" /> @bangkok_prime
              </span>
              <span>100%</span>
            </div>

            {/* Video Graphic simulation */}
            <div className="aspect-[9/12] bg-[#1a1d24] rounded-lg relative overflow-hidden flex flex-col justify-end p-2.5 border border-white/5">
              <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/60 text-[9px] text-gray-300 font-mono">
                ฿34.5M
              </div>
              <div className="absolute right-2 bottom-12 flex flex-col items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[9px]">
                  ♥
                </span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[9px]">
                  💬
                </span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[9px]">
                  ↗
                </span>
              </div>
              <div className="space-y-0.5 z-10">
                <div className="font-semibold text-[11px] text-white">
                  @bangkok_prime
                </div>
                <p className="text-[10px] text-gray-200 line-clamp-2">
                  Step inside this Asoke Penthouse retreat. 210 sqm with private sky terrace...
                </p>
                <div className="text-[9px] text-gray-400">♫ Original Audio - Bangkok Prime</div>
              </div>
            </div>
          </div>

          {/* Scheduled Queue Items */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-textPrimary">
              <span>Publishing Timeline</span>
              <span className="text-[10px] text-textSecondary font-normal">Next 48 Hours</span>
            </div>

            <div className="space-y-1.5">
              <div className="bg-white p-2.5 rounded-lg border border-borderSubtle flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-textPrimary text-xs">#EA-9021</span>
                    <span className="px-1 py-0.2 rounded text-[9px] bg-amber-50 text-amber-700 font-medium">
                      Queued
                    </span>
                  </div>
                  <div className="text-[10px] text-textSecondary flex items-center gap-1">
                    <FiCalendar className="w-2.5 h-2.5" /> Today, 17:30 &bull; TikTok
                  </div>
                </div>
                <FiChevronRight className="w-3.5 h-3.5 text-textSecondary" />
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-borderSubtle flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-textPrimary text-xs">#EA-8940</span>
                    <span className="px-1 py-0.2 rounded text-[9px] bg-blue-50 text-blue-700 font-medium">
                      In Review
                    </span>
                  </div>
                  <div className="text-[10px] text-textSecondary flex items-center gap-1">
                    <FiCalendar className="w-2.5 h-2.5" /> Tomorrow, 10:00 &bull; Instagram
                  </div>
                </div>
                <FiChevronRight className="w-3.5 h-3.5 text-textSecondary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative Notice Footer */}
      <div className="bg-bgSecondary px-4 py-2 border-t border-borderSubtle flex flex-wrap items-center justify-between text-[11px] text-textSecondary">
        <span>
          UI Demonstration: Simulated real estate listing data and channel workflow layout.
        </span>
        <span className="font-mono text-[10px]">
          API Target: TikTok Content Posting API (Direct Post & Video Upload)
        </span>
      </div>
    </div>
  );
};
