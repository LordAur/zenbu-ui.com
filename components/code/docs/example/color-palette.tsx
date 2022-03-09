import { darkMode } from '../../../../pages/_app'
import { Box } from '@zenbu-ui/box'
import { Button } from '@zenbu-ui/button'
import { Example } from '../../../example/example'

import { Tag } from '@zenbu-ui/tags'
import { Table } from '@zenbu-ui/table'
import { Text} from '@zenbu-ui/typography'

export const ColorPalette = () => {
  return(
    <div className="grid grid-cols-1 gap-8 mb-10">
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Slate
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(248, 250, 252)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F8FAFC
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(241, 245, 249)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F1F5F9
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(226, 232, 240)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E2E8F0
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(203, 213, 225)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #CBD5E1
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(148, 163, 184)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #94A3B8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(100, 116, 139)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #64748B
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(71, 85, 105)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #475569
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(51, 65, 85)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #334155
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(30, 41, 59)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #1E293B
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(15, 23, 42)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0F172A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Gray
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(249, 250, 251)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F9FAFB
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(243, 244, 246)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F3F4F6
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(229, 231, 235)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E5E7EB
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(209, 213, 219)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D1D5DB
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(156, 163, 175)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #9CA3AF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(107, 114, 128)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #6B7280
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(75, 85, 99)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #4B5563
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(55, 65, 81)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #374151
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(31, 41, 55)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #1F2937
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(17, 24, 39)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #111827
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Zinc
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(250, 250, 250)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FAFAFA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(244, 244, 245)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F4F4F5
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(228, 228, 231)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E4E4E7
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(212, 212, 216)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D4D4D8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(161, 161, 170)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A1A1AA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(113, 113, 122)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #71717A
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(82, 82, 91)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #52525B
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(63, 63, 70)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #3F3F46
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(39, 39, 42)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #27272A
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(24, 24, 27)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #18181B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Neutral
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(250, 250, 250)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FAFAFA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(245, 245, 245)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F5F5F5
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(229, 229, 229)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E5E5E5
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(212, 212, 212)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D4D4D4
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(163, 163, 163)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A3A3A3
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(115, 115, 115)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #737373
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(82, 82, 82)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #525252
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(64, 64, 64)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #404040
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(38, 38, 38)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #262626
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(23, 23, 23)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #171717
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Stone
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(250, 250, 249)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FAFAF9
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(245, 245, 244)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F5F5F4
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(231, 229, 228)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E7E5E4
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(214, 211, 209)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D6D3D1
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(168, 162, 158)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A8A29E
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(120, 113, 108)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #78716C
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(87, 83, 78)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #57534E
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(68, 64, 60)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #44403C
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(41, 37, 36)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #292524
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(28, 25, 23)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #1C1917
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Red
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 242, 242)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FEF2F2
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 226, 226)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FEE2E2
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 202, 202)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FECACA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(252, 165, 165)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FCA5A5
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(248, 113, 113)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F87171
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(239, 68, 68)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #EF4444
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(220, 38, 38)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #DC2626
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(185, 28, 28)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #B91C1C
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(153, 27, 27)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #991B1B
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(127, 29, 29)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #7F1D1D
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Orange
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(255, 247, 237)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FFF7ED
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(255, 237, 213)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FFEDD5
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 215, 170)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FED7AA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(253, 186, 116)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FDBA74
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(251, 146, 60)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FB923C
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(249, 115, 22)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F97316
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(234, 88, 12)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #EA580C
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(194, 65, 12)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #C2410C
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(154, 52, 18)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #9A3412
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(124, 45, 18)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #7C2D12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Amber
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(255, 251, 235)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FFFBEB
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 243, 199)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FEF3C7
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(253, 230, 138)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FDE68A
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(252, 211, 77)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FCD34D
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(251, 191, 36)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FBBF24
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(245, 158, 11)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F59E0B
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(217, 119, 6)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D97706
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(180, 83, 9)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #B45309
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(146, 64, 14)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #92400E
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(120, 53, 15)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #78350F
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Yellow
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 252, 232)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FEFCE8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 249, 195)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FEF9C3
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 240, 138)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FEF08A
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(253, 224, 71)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FDE047
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(250, 204, 21)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FACC15
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(234, 179, 8)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #EAB308
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(202, 138, 4)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #CA8A04
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(161, 98, 7)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A16207
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(133, 77, 14)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #854D0E
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(113, 63, 18)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #713F12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Lime
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(247, 254, 231)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F7FEE7
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(236, 252, 203)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #ECFCCB
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(217, 249, 157)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D9F99D
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(190, 242, 100)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #BEF264
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(163, 230, 53)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A3E635
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(132, 204, 22)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #84CC16
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(101, 163, 13)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #65A30D
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(77, 124, 15)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #4D7C0F
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(63, 98, 18)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #3F6212
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(54, 83, 20)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #365314
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Green
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(240, 253, 244)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F0FDF4
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(220, 252, 231)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #DCFCE7
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(187, 247, 208)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #BBF7D0
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(134, 239, 172)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #86EFAC
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(74, 222, 128)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #4ADE80
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(34, 197, 94)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #22C55E
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(22, 163, 74)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #16A34A
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(21, 128, 61)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #15803D
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(22, 101, 52)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #166534
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(20, 83, 45)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #14532D
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Emerald
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(236, 253, 245)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #ECFDF5
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(209, 250, 229)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D1FAE5
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(167, 243, 208)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A7F3D0
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(110, 231, 183)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #6EE7B7
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(52, 211, 153)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #34D399
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(16, 185, 129)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #10B981
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(5, 150, 105)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #059669
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(4, 120, 87)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #047857
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(6, 95, 70)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #065F46
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(6, 78, 59)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #064E3B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Teal
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(240, 253, 250)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F0FDFA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(204, 251, 241)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #CCFBF1
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(153, 246, 228)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #99F6E4
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(94, 234, 212)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #5EEAD4
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(45, 212, 191)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #2DD4BF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(20, 184, 166)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #14B8A6
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(13, 148, 136)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0D9488
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(15, 118, 110)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0F766E
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(17, 94, 89)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #115E59
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(19, 78, 74)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #134E4A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Cyan
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(236, 254, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #ECFEFF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(207, 250, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #CFFAFE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(165, 243, 252)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A5F3FC
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(103, 232, 249)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #67E8F9
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(34, 211, 238)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #22D3EE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(6, 182, 212)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #06B6D4
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(8, 145, 178)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0891B2
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(14, 116, 144)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0E7490
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(21, 94, 117)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #155E75
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(22, 78, 99)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #164E63
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Sky
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(240, 249, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F0F9FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(224, 242, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E0F2FE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(186, 230, 253)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #BAE6FD
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(125, 211, 252)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #7DD3FC
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(56, 189, 248)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #38BDF8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(14, 165, 233)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0EA5E9
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(2, 132, 199)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0284C7
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(3, 105, 161)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0369A1
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(7, 89, 133)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #075985
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(12, 74, 110)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #0C4A6E
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Blue
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(239, 246, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #EFF6FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(219, 234, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #DBEAFE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(191, 219, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #BFDBFE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(147, 197, 253)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #93C5FD
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(96, 165, 250)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #60A5FA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(59, 130, 246)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #3B82F6
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(37, 99, 235)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #2563EB
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(29, 78, 216)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #1D4ED8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(30, 64, 175)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #1E40AF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(30, 58, 138)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #1E3A8A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Indigo
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(238, 242, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #EEF2FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(224, 231, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E0E7FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(199, 210, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #C7D2FE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(165, 180, 252)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A5B4FC
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(129, 140, 248)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #818CF8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(99, 102, 241)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #6366F1
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(79, 70, 229)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #4F46E5
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(67, 56, 202)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #4338CA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(55, 48, 163)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #3730A3
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(49, 46, 129)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #312E81
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Violet
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(245, 243, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F5F3FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(237, 233, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #EDE9FE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(221, 214, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #DDD6FE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(196, 181, 253)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #C4B5FD
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(167, 139, 250)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A78BFA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(139, 92, 246)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #8B5CF6
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(124, 58, 237)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #7C3AED
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(109, 40, 217)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #6D28D9
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(91, 33, 182)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #5B21B6
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(76, 29, 149)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #4C1D95
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Purple
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(250, 245, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FAF5FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(243, 232, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F3E8FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(233, 213, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E9D5FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(216, 180, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D8B4FE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(192, 132, 252)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #C084FC
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(168, 85, 247)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A855F7
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(147, 51, 234)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #9333EA
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(126, 34, 206)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #7E22CE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(107, 33, 168)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #6B21A8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(88, 28, 135)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #581C87
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Fuchsia
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(253, 244, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FDF4FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(250, 232, 255)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FAE8FF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(245, 208, 254)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F5D0FE
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(240, 171, 252)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F0ABFC
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(232, 121, 249)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E879F9
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(217, 70, 239)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #D946EF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(192, 38, 211)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #C026D3
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(162, 28, 175)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #A21CAF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(134, 25, 143)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #86198F
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(112, 26, 117)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #701A75
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Pink
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(253, 242, 248)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FDF2F8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(252, 231, 243)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FCE7F3
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(251, 207, 232)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FBCFE8
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(249, 168, 212)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F9A8D4
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(244, 114, 182)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F472B6
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(236, 72, 153)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #EC4899
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(219, 39, 119)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #DB2777
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(190, 24, 93)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #BE185D
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(157, 23, 77)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #9D174D
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(131, 24, 67)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #831843
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div className="w-16 shrink-0">
            <div className="h-10 flex flex-col justify-center">
              <div className={`text-sm font-semibold text-slate-600 ${darkMode ? "dark:text-slate-200" : ""}`}>
                Rose
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(255, 241, 242)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  50
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FFF1F2
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(255, 228, 230)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  100
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FFE4E6
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(254, 205, 211)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  200
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FECDD3
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(253, 164, 175)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  300
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FDA4AF
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(251, 113, 133)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  400
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #FB7185
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(244, 63, 94)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  500
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #F43F5E
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(225, 29, 72)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  600
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #E11D48
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(190, 18, 60)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  700
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #BE123C
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(159, 18, 57)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  800
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #9F1239
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div
                className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "rgb(136, 19, 55)" }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div className={`w-6 font-medium text-slate-700 2xl:w-full ${darkMode ? "dark:text-white" : ""}`}>
                  900
                </div>
                <div className="text-slate-500 font-mono lowercase dark:text-slate-400">
                  #881337
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ColorPaletteExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-3">
        <Box width="10" height="3" color="red" colorContrast="600" />
        <Box width="10" height="3" color="blue" colorContrast="600" />
        <Box width="10" height="3" color="green" colorContrast="600" />
      </div>
    </Example>
  )
}

export const ColorPaletteDarkExample = () => {
  return(
    <Example dark py={5}>
      <div className="flex gap-3">
        <Box width="10" height="3" color="red" colorContrast="600" darkColor="red" darkColorContrast="800" />
        <Box width="10" height="3" color="blue" colorContrast="600" darkColor="blue" darkColorContrast="800" />
        <Box width="10" height="3" color="green" colorContrast="600" darkColor="green" darkColorContrast="800" />
      </div>
    </Example>
  )
}

export const TextColorExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-3">
        <Button color="slate" colorContrast="300" colorHoverContrast="300" textColor="slate" textColorContrast="700">Button</Button>
        <Button color="slate" colorContrast="300" colorHoverContrast="300" textColor="red" textColorContrast="700">Button</Button>
        <Button color="slate" colorContrast="300" colorHoverContrast="300" textColor="blue" textColorContrast="700">Button</Button>
      </div>
    </Example>
  )
}

export const BorderColorExample = () => {
  return(
    <Example py={5}>
      <div className="flex gap-3">
        <Button textColor="slate" textColorContrast="700" color="slate" colorContrast="300" colorHoverContrast="300" border borderColor="red" borderColorContrast="700" borderWidth="2">Button</Button>
        <Button textColor="slate" textColorContrast="700" color="slate" colorContrast="300" colorHoverContrast="300" border borderColor="blue" borderColorContrast="700" borderWidth="2">Button</Button>
      </div>
    </Example>
  )
}

export const ColorList = () => {
  const cols = [{
    header: (<Text componentName="table-column">Prop</Text>),
    accessor: "prop",
    position: "left"
  }, {
    header: (<Text componentName="table-column">Description</Text>),
    accessor: "description",
    position: "left"
  }]

  const rows = [{
    prop: <Tag componentName="prop">color</Tag>,
    description: <Text componentName="standard">Change the basic color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">colorContrast</Tag>,
    description: <Text componentName="standard">Change the basic color contrast of the component.</Text>
  }, {
    prop: <Tag componentName="prop">darkColor</Tag>,
    description: <Text componentName="standard">The basic color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">darkColorContrast</Tag>,
    description: <Text componentName="standard">The basic color contrast of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">colorHover</Tag>,
    description: <Text componentName="standard">Change the hovered color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">colorHoverContrast</Tag>,
    description: <Text componentName="standard">Change the hovered color contrast of the component.</Text>
  }, {
    prop: <Tag componentName="prop">darkColorHover</Tag>,
    description: <Text componentName="standard">The hovered color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">darkColorHoverContrast</Tag>,
    description: <Text componentName="standard">The hovered color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">borderColor</Tag>,
    description: <Text componentName="standard">Change the border color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">borderColorContrast</Tag>,
    description: <Text componentName="standard">Change the border color contrast of the component.</Text>
  }, {
    prop: <Tag componentName="prop">shadowColor</Tag>,
    description: <Text componentName="standard">Change the shadow color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">shadowColorContrast</Tag>,
    description: <Text componentName="standard">Change the shadow color contrast of the component.</Text>
  }, {
    prop: <Tag componentName="prop">darkShadowColor</Tag>,
    description: <Text componentName="standard">The shadow color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">darkShadowColorContrast</Tag>,
    description: <Text componentName="standard">The shadow color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">textColor</Tag>,
    description: <Text componentName="standard">Change the text color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">textColorContrast</Tag>,
    description: <Text componentName="standard">Change the text color contrast of the component.</Text>
  }, {
    prop: <Tag componentName="prop">darkTextColor</Tag>,
    description: <Text componentName="standard">The text color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">darkTextColorContrast</Tag>,
    description: <Text componentName="standard">The text color contrast of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">textDecorationColor</Tag>,
    description: <Text componentName="standard">Change the text decoration color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">textDecorationColorContrast</Tag>,
    description: <Text componentName="standard">Change the text decoration color contrast of the component.</Text>
  }, {
    prop: <Tag componentName="prop">darkTextDecorationColor</Tag>,
    description: <Text componentName="standard">The text decoration color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">darkTextDecorationColorContrast</Tag>,
    description: <Text componentName="standard">The text decoration color contrast of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">selectionColor</Tag>,
    description: <Text componentName="standard">Change the selection background color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">selectionColorContrast</Tag>,
    description: <Text componentName="standard">Change the selection background color contrast of the component.</Text>
  }, {
    prop: <Tag componentName="prop">darkSelectionColor</Tag>,
    description: <Text componentName="standard">The selection background color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">darkSelectionColorContrast</Tag>,
    description: <Text componentName="standard">The selection background color contrast of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">selectionTextColor</Tag>,
    description: <Text componentName="standard">Change the selection text color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">selectionTextColorContrast</Tag>,
    description: <Text componentName="standard">Change the selection text color contrast of the component.</Text>
  }, {
    prop: <Tag componentName="prop">darkSelectionTextColor</Tag>,
    description: <Text componentName="standard">The selection text color of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">darkSelectionTextColorContrast</Tag>,
    description: <Text componentName="standard">The selection text color contrast of the component will be changed if the dark mode is active.</Text>
  }, {
    prop: <Tag componentName="prop">firstLetterTextColor</Tag>,
    description: <Text componentName="standard">Change the first text color of the component.</Text>
  }, {
    prop: <Tag componentName="prop">firstLetterTextColorContrast</Tag>,
    description: <Text componentName="standard">Change the first text color contrast of the component.</Text>
  }]

  return(
    <Table columns={cols} rows={rows} my="6" />
  )
}
