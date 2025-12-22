import React from 'react';

// Base shimmer animation component
const ShimmerBase: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] ${className}`} />
);

// Shimmer for stat cards on Dashboard
export const ShimmerStatCard: React.FC = () => (
    <div className="relative overflow-hidden p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-3">
                <ShimmerBase className="w-10 h-10 rounded-lg" />
                <ShimmerBase className="w-20 h-4 rounded" />
            </div>
            <ShimmerBase className="w-24 h-8 rounded" />
            <ShimmerBase className="w-16 h-3 rounded" />
        </div>
    </div>
);

// Shimmer for course cards
export const ShimmerCourseCard: React.FC = () => (
    <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
        <ShimmerBase className="w-12 h-12 rounded-xl mb-4" />
        <ShimmerBase className="w-3/4 h-6 rounded mb-2" />
        <ShimmerBase className="w-full h-4 rounded mb-1" />
        <ShimmerBase className="w-2/3 h-4 rounded mb-6" />
        <div className="flex flex-col gap-3 pt-4 border-t border-slate-50">
            <div className="flex justify-between items-center">
                <ShimmerBase className="w-16 h-4 rounded" />
                <ShimmerBase className="w-10 h-4 rounded" />
            </div>
            <ShimmerBase className="w-full h-2 rounded-full" />
            <div className="flex justify-between items-center mt-2">
                <ShimmerBase className="w-24 h-4 rounded" />
                <ShimmerBase className="w-4 h-4 rounded" />
            </div>
        </div>
    </div>
);

// Shimmer for dashboard course list items
export const ShimmerCourseListItem: React.FC = () => (
    <div className="flex flex-col md:flex-row items-center gap-6 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
        <div className="w-full md:w-auto flex items-center gap-4 flex-1">
            <ShimmerBase className="size-16 rounded-xl shrink-0" />
            <div className="flex-1">
                <ShimmerBase className="w-3/4 h-5 rounded mb-2" />
                <ShimmerBase className="w-16 h-4 rounded" />
            </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2">
            <div className="flex justify-between">
                <ShimmerBase className="w-16 h-3 rounded" />
                <ShimmerBase className="w-8 h-3 rounded" />
            </div>
            <ShimmerBase className="w-full h-2.5 rounded-full" />
        </div>
        <div className="w-full md:w-auto flex justify-end">
            <ShimmerBase className="w-20 h-9 rounded-lg" />
        </div>
    </div>
);

// Shimmer for action cards on Dashboard
export const ShimmerActionCard: React.FC = () => (
    <div className="flex flex-col justify-between p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
        <div>
            <ShimmerBase className="size-12 rounded-xl mb-4" />
            <ShimmerBase className="w-3/4 h-5 rounded mb-2" />
            <ShimmerBase className="w-full h-4 rounded" />
        </div>
        <div className="mt-6">
            <ShimmerBase className="w-20 h-4 rounded" />
        </div>
    </div>
);

// Shimmer for course detail header
export const ShimmerCourseDetailHeader: React.FC = () => (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex-1">
                <ShimmerBase className="w-20 h-6 rounded-full mb-4" />
                <ShimmerBase className="w-3/4 h-10 rounded mb-4" />
                <ShimmerBase className="w-full h-5 rounded mb-2" />
                <ShimmerBase className="w-2/3 h-5 rounded" />
            </div>
            <div className="flex items-center gap-8 bg-white/80 p-6 rounded-2xl border border-slate-100">
                <div className="text-center">
                    <ShimmerBase className="w-16 h-8 rounded mx-auto mb-1" />
                    <ShimmerBase className="w-12 h-3 rounded mx-auto" />
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div className="text-center">
                    <ShimmerBase className="w-12 h-8 rounded mx-auto mb-1" />
                    <ShimmerBase className="w-12 h-3 rounded mx-auto" />
                </div>
            </div>
        </div>
        <ShimmerBase className="w-full h-4 rounded-full" />
    </div>
);

// Shimmer for lesson list items
export const ShimmerLessonItem: React.FC = () => (
    <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center gap-6">
        <ShimmerBase className="w-14 h-14 rounded-full shrink-0" />
        <div className="flex-1">
            <ShimmerBase className="w-3/4 h-5 rounded mb-2" />
            <div className="flex items-center gap-6">
                <ShimmerBase className="w-16 h-4 rounded" />
                <ShimmerBase className="w-16 h-4 rounded" />
            </div>
        </div>
        <ShimmerBase className="w-16 h-8 rounded-lg hidden sm:block" />
    </div>
);

// Dashboard shimmer layout
export const ShimmerDashboard: React.FC = () => (
    <div className="flex flex-col gap-10 pb-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col">
                <ShimmerBase className="w-64 h-10 rounded mb-2" />
                <div className="flex items-center gap-2">
                    <ShimmerBase className="w-6 h-6 rounded" />
                    <ShimmerBase className="w-32 h-4 rounded" />
                </div>
            </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ShimmerStatCard />
            <ShimmerStatCard />
            <ShimmerStatCard />
            <ShimmerStatCard />
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
                <ShimmerBase className="w-32 h-6 rounded" />
                <div className="h-[1px] flex-1 bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ShimmerActionCard />
                <ShimmerActionCard />
                <ShimmerActionCard />
            </div>
        </div>

        {/* Courses */}
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <ShimmerBase className="w-28 h-6 rounded" />
                <ShimmerBase className="w-20 h-4 rounded" />
            </div>
            <div className="flex flex-col gap-4">
                <ShimmerCourseListItem />
                <ShimmerCourseListItem />
                <ShimmerCourseListItem />
            </div>
        </div>
    </div>
);

// Courses page shimmer layout
export const ShimmerCoursesPage: React.FC = () => (
    <div className="flex flex-col gap-10 pb-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6">
        {/* Header */}
        <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-xl md:hidden">
                <ShimmerBase className="w-6 h-6 rounded" />
            </div>
            <div>
                <ShimmerBase className="w-48 h-10 rounded mb-2" />
                <ShimmerBase className="w-72 h-5 rounded" />
            </div>
        </div>

        {/* Level section */}
        {[1, 2].map((i) => (
            <section key={i} className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                        <ShimmerBase className="p-2 w-10 h-10 rounded-lg" />
                        <ShimmerBase className="w-32 h-7 rounded" />
                    </div>
                    <ShimmerBase className="w-24 h-6 rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <ShimmerCourseCard />
                    <ShimmerCourseCard />
                    <ShimmerCourseCard />
                    <ShimmerCourseCard />
                </div>
            </section>
        ))}
    </div>
);

// Course detail page shimmer layout
export const ShimmerCourseDetail: React.FC = () => (
    <div className="flex flex-col gap-8 pb-10 max-w-7xl mx-auto w-full">
        {/* Back button */}
        <ShimmerBase className="w-40 h-9 rounded-lg" />

        {/* Header */}
        <ShimmerCourseDetailHeader />

        {/* Continue learning card */}
        <div className="bg-slate-100 rounded-2xl p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-8">
                    <ShimmerBase className="w-20 h-20 rounded-2xl" />
                    <div>
                        <ShimmerBase className="w-24 h-4 rounded mb-2" />
                        <ShimmerBase className="w-48 h-8 rounded mb-3" />
                        <div className="flex items-center gap-4">
                            <ShimmerBase className="w-24 h-6 rounded-full" />
                            <ShimmerBase className="w-16 h-4 rounded" />
                        </div>
                    </div>
                </div>
                <ShimmerBase className="w-40 h-14 rounded-lg" />
            </div>
        </div>

        {/* Lessons list */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <ShimmerBase className="w-10 h-10 rounded-lg" />
                <ShimmerBase className="w-36 h-7 rounded" />
            </div>
            <div className="flex flex-col gap-4">
                <ShimmerLessonItem />
                <ShimmerLessonItem />
                <ShimmerLessonItem />
                <ShimmerLessonItem />
            </div>
        </section>
    </div>
);
