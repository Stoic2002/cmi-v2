import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { Card, CardBody, Loading } from '../../components/common';
import { useAuthStore, useCourseStore } from '../../stores';
import { LEVELS } from '../../utils/constants';

export const Courses: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const { courses, fetchCourses, isLoading } = useCourseStore();

    React.useEffect(() => {
        if (user?.targetLanguage) {
            fetchCourses(user.targetLanguage);
        }
    }, [user?.targetLanguage]);

    if (isLoading) {
        return <Loading fullScreen text="Memuat kursus..." />;
    }

    // Group courses by level
    const coursesByLevel = courses.reduce((acc, course) => {
        const level = course.level;
        if (!acc[level]) acc[level] = [];
        acc[level].push(course);
        return acc;
    }, {} as Record<string, typeof courses>);

    const levelOrder = ['beginner', 'elementary', 'intermediate', 'advanced'];

    return (
        <div className="flex flex-col gap-10 pb-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6">
            {/* Header */}
            <div className="flex items-center gap-4 animate-in slide-in-from-top-4 duration-500">
                <div className="p-3 bg-primary/10 rounded-xl text-primary md:hidden">
                    <BookOpen size={24} />
                </div>
                <div>
                    <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2">
                        Kursus Saya
                    </h1>
                    <p className="text-slate-500 font-medium text-lg">
                        Pelajari bahasa secara bertahap dari level pemula hingga mahir
                    </p>
                </div>
            </div>

            {courses.length === 0 ? (
                <Card className="flex items-center justify-center p-12 text-center min-h-[300px] border-dashed border-2 border-slate-200 shadow-none bg-slate-50/50">
                    <CardBody className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-slate-300 mb-2 shadow-sm border border-slate-100">
                            <GraduationCap size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Belum Ada Kursus</h3>
                        <p className="text-slate-500 max-w-md">Kursus untuk bahasa Anda sedang disiapkan. Silakan cek kembali nanti.</p>
                    </CardBody>
                </Card>
            ) : (
                <div className="flex flex-col gap-10">
                    {levelOrder.map((levelKey) => {
                        const levelCourses = coursesByLevel[levelKey];
                        if (!levelCourses || levelCourses.length === 0) return null;

                        const levelInfo = LEVELS[levelKey as keyof typeof LEVELS];

                        return (
                            <section key={levelKey} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                                    <h2 className="text-2xl font-bold text-slate-900 capitalize flex items-center gap-3">
                                        <div className={`p-2 rounded-lg text-white ${levelKey === 'beginner' ? 'bg-green-500' :
                                                levelKey === 'elementary' ? 'bg-teal-500' :
                                                    levelKey === 'intermediate' ? 'bg-blue-500' :
                                                        'bg-accent'
                                            }`}>
                                            <GraduationCap size={20} />
                                        </div>
                                        {levelInfo?.name || levelKey}
                                    </h2>
                                    <span className="text-slate-500 text-sm font-medium px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100">
                                        {levelInfo?.description}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {levelCourses.map((course) => {
                                        const progress = course.totalLessons > 0
                                            ? Math.round((course.completedLessons / course.totalLessons) * 100)
                                            : 0;

                                        return (
                                            <Card
                                                key={course.id}
                                                className="group cursor-pointer border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                                                hoverable
                                                onClick={() => navigate(`/courses/${course.id}`)}
                                            >
                                                <CardBody className="h-full flex flex-col p-6">
                                                    <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white shadow-md ${levelKey === 'beginner' ? 'bg-green-500' :
                                                            levelKey === 'elementary' ? 'bg-teal-500' :
                                                                levelKey === 'intermediate' ? 'bg-blue-500' :
                                                                    'bg-accent'
                                                        }`}>
                                                        <BookOpen size={24} />
                                                    </div>

                                                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                                        {course.titleId}
                                                    </h3>
                                                    <p className="text-slate-500 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                                                        {course.descriptionId}
                                                    </p>

                                                    <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-slate-50">
                                                        <div className="flex justify-between items-end text-sm">
                                                            <span className="font-semibold text-slate-600">
                                                                Progress
                                                            </span>
                                                            <span className={`font-bold ${progress === 100 ? 'text-green-500' : 'text-primary'}`}>
                                                                {progress}%
                                                            </span>
                                                        </div>

                                                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full transition-all duration-1000 ease-out ${progress === 100 ? 'bg-green-500' : 'bg-primary'
                                                                    }`}
                                                                style={{ width: `${progress}%` }}
                                                            />
                                                        </div>

                                                        <div className={`mt-2 flex items-center justify-between text-sm font-bold transition-colors ${progress === 0 ? 'text-blue-500 group-hover:text-blue-600' :
                                                                progress === 100 ? 'text-green-500 group-hover:text-green-600' :
                                                                    'text-primary group-hover:text-red-600'
                                                            }`}>
                                                            <span>{progress === 0 ? 'Mulai Kursus' : progress === 100 ? 'Ulangi Kursus' : 'Lanjutkan'}</span>
                                                            <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

