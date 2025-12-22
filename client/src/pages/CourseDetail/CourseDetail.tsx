import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Lock, Play, Star } from 'lucide-react';
import { Button, Card, CardBody, ShimmerCourseDetail } from '../../components/common';
import { useCourseStore } from '../../stores';
import { LEVELS } from '../../utils/constants';

export const CourseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { currentCourse, lessons, fetchCourse, isLoading } = useCourseStore();

    React.useEffect(() => {
        if (id) {
            fetchCourse(id);
        }
    }, [id]);

    if (isLoading || !currentCourse) {
        return <ShimmerCourseDetail />;
    }

    const levelInfo = LEVELS[currentCourse.level as keyof typeof LEVELS];
    const completedCount = lessons.filter(l => l.completed).length;
    const progress = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

    // Find next uncompleted lesson
    const nextLesson = lessons.find(l => !l.completed);

    return (
        <div className="flex flex-col gap-8 pb-10 max-w-7xl mx-auto w-full">
            <Button
                variant="ghost"
                onClick={() => navigate('/courses')}
                leftIcon={<ArrowLeft size={18} />}
                className="w-fit hover:bg-slate-100 text-slate-600"
            >
                Kembali ke Kursus
            </Button>

            <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex-1">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border shadow-sm ${currentCourse.level === 'beginner' ? 'bg-green-50 text-green-600 border-green-100' :
                            currentCourse.level === 'elementary' ? 'bg-teal-50 text-teal-600 border-teal-100' :
                                currentCourse.level === 'intermediate' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                    'bg-accent/10 text-accent border-accent/20'
                            }`}>
                            <span className={`w-2 h-2 rounded-full ${currentCourse.level === 'beginner' ? 'bg-green-500' :
                                currentCourse.level === 'elementary' ? 'bg-teal-500' :
                                    currentCourse.level === 'intermediate' ? 'bg-blue-500' :
                                        'bg-accent'
                                }`}></span>
                            {levelInfo?.name}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">{currentCourse.titleId}</h1>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">{currentCourse.descriptionId}</p>
                    </div>

                    <div className="flex items-center gap-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-soft">
                        <div className="text-center">
                            <span className="block text-3xl font-black text-slate-900">{completedCount}/{lessons.length}</span>
                            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Pelajaran</span>
                        </div>
                        <div className="w-px h-12 bg-slate-200"></div>
                        <div className="text-center">
                            <span className={`block text-3xl font-black ${progress === 100 ? 'text-green-500' : 'text-primary'}`}>{progress}%</span>
                            <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Selesai</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-sm relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-white/20 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {
                nextLesson && (
                    <div
                        className="bg-slate-800 text-white rounded-2xl shadow-lg relative overflow-hidden group cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                        onClick={() => navigate(`/lessons/${nextLesson.id}`)}
                    >
                        <div className="absolute top-0 right-0 p-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors duration-500"></div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 relative z-10 w-full">
                            <div className="flex items-center gap-8">
                                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    <Play size={40} className="text-white ml-2 drop-shadow-lg" fill="currentColor" />
                                </div>
                                <div>
                                    <span className="text-primary-300 font-bold uppercase tracking-widest text-xs mb-2 block">Lanjutkan Belajar</span>
                                    <h3 className="text-3xl font-bold text-white mb-3">{nextLesson.titleId}</h3>
                                    <div className="text-slate-400 flex items-center gap-4 text-sm font-medium">
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Pelajaran {nextLesson.order}</span>
                                        <span className="flex items-center gap-1.5 text-amber-400"><Star size={16} fill="currentColor" /> {nextLesson.xpReward} XP</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                className="bg-white text-slate-900 hover:bg-primary hover:text-white border-none min-w-[160px] h-14 text-lg font-bold shadow-xl transition-all duration-300"
                                rightIcon={<Play size={20} className="ml-1" fill="currentColor" />}
                            >
                                Mulai
                            </Button>
                        </div>
                    </div>
                )
            }

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <BookOpen size={24} />
                    </div>
                    Daftar Pelajaran
                </h2>

                <div className="flex flex-col gap-4">
                    {lessons.map((lesson, index) => {
                        const isLocked = index > 0 && !lessons[index - 1].completed && !lesson.completed;

                        return (
                            <Card
                                key={lesson.id}
                                className={`group transition-all duration-300 border-l-[6px] ${lesson.completed
                                    ? 'bg-green-50/50 border-l-green-500 border-t-green-100 border-r-green-100 border-b-green-100'
                                    : isLocked
                                        ? 'bg-slate-50 border-l-slate-300 border-t-slate-100 border-r-slate-100 border-b-slate-100 opacity-80'
                                        : 'bg-white border-l-primary border-t-slate-200 border-r-slate-200 border-b-slate-200 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5'
                                    }`}
                                hoverable={!isLocked}
                                onClick={() => !isLocked && navigate(`/lessons/${lesson.id}`)}
                            >
                                <CardBody className="flex items-center gap-6 p-6">
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-2 transition-all shadow-sm ${lesson.completed ? 'bg-green-100 border-green-200 text-green-600' :
                                        isLocked ? 'bg-slate-100 border-slate-200 text-slate-400' :
                                            'bg-white border-primary text-primary group-hover:bg-primary group-hover:text-white'
                                        }`}>
                                        {lesson.completed ? (
                                            <CheckCircle size={28} className="check-icon" />
                                        ) : isLocked ? (
                                            <Lock size={24} className="lock-icon" />
                                        ) : (
                                            <span className="font-bold text-xl font-mono">{lesson.order}</span>
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className={`font-bold text-lg truncate mb-1 ${isLocked ? 'text-slate-400' : 'text-slate-900'}`}>
                                            {lesson.titleId}
                                        </h3>
                                        <div className="flex items-center gap-6 text-sm">
                                            <span className={`flex items-center gap-1.5 ${isLocked ? 'text-slate-400' : 'text-slate-500'}`}>
                                                <BookOpen size={16} /> {lesson.quizCount} Quiz
                                            </span>
                                            <span className={`flex items-center gap-1.5 font-bold ${isLocked ? 'text-slate-400' : 'text-amber-500'}`}>
                                                <Star size={16} className={`${isLocked ? '' : 'fill-amber-500'}`} /> {lesson.xpReward} XP
                                            </span>
                                        </div>
                                    </div>

                                    <div className="hidden sm:block">
                                        {!isLocked && !lesson.completed && (
                                            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/5 hover:text-primary-hover font-bold">
                                                Mulai
                                            </Button>
                                        )}
                                        {lesson.completed && (
                                            <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50 font-bold">
                                                Ulangi
                                            </Button>
                                        )}
                                    </div>
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>
            </section>
        </div >
    );
};
