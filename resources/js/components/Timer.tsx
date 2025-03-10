import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function CountdownTimer() {
    const [targetDate] = useState<Date>(new Date('2025-04-12'));
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();

            if (difference <= 0) {
                setIsExpired(true);
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };
            }

            setIsExpired(false);

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <Card className="container w-full border-none">
            <CardHeader className="text-center">
                <CardTitle className="text-4xl">Time Remaining</CardTitle>
                <CardDescription>Counting down to {format(targetDate, 'PPP')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="rounded-lg p-3 sm:p-4 md:p-6">
                    {isExpired ? (
                        <div className="text-center text-2xl font-bold">Countdown Expired!</div>
                    ) : (
                        <>
                            <h3 className="mb-4 text-center text-base font-medium sm:text-lg">Time Remaining Until {format(targetDate, 'PPP')}</h3>
                            <div className="grid grid-cols-3 gap-2 text-center text-4xl">
                                <CountdownUnit value={timeLeft.days} label="Days" />
                                <CountdownUnit value={timeLeft.hours} label="Hours" />
                                <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                            </div>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col">
            <div className="bg-background rounded-md p-2 text-2xl font-bold sm:text-3xl md:text-6xl">{value.toString().padStart(2, '0')}</div>
            <div className="mt-1 text-4xl font-medium sm:text-sm">{label}</div>
        </div>
    );
}
