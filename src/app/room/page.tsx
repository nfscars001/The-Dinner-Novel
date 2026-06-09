'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import RoomShell from '@/components/room/RoomShell';
import RoomFloorplan from '@/components/room/RoomFloorplan';
import RoomHotspotCards from '@/components/room/RoomHotspotCards';
import { ROOM_PLAN_DATA, RoomPlanKey } from '@/components/room/roomPlanData';

function RoomContent() {
    const searchParams = useSearchParams();
    const source = searchParams.get('source');
    const isLaGloria = source === 'lagloria';
    
    const [viewMode, setViewMode] = useState<'floorplan' | 'list'>('floorplan');
    const [activePlan, setActivePlan] = useState<RoomPlanKey>('dining_room');
    const [activeModal, setActiveModal] = useState<any | null>(null);

    const currentPlan = ROOM_PLAN_DATA[activePlan];

    const handleHotspotClick = (id: string) => {
        const spot = currentPlan.hotspots.find(h => h.id === id);
        if (spot) setActiveModal(spot);
    };

    return (
        <RoomShell
            title="Walk the Room"
            subtitle="Every corner holds a different thread."
            isLaGloria={isLaGloria}
            viewMode={viewMode}
            setViewMode={setViewMode}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            activePlan={activePlan}
            setActivePlan={setActivePlan}
        >
            {viewMode === 'floorplan' ? (
                <RoomFloorplan 
                    planId={activePlan}
                    hotspots={currentPlan.hotspots}
                    onHotspotClick={handleHotspotClick}
                    activeHotspotId={activeModal?.id}
                    isLaGloria={isLaGloria}
                />
            ) : (
                <RoomHotspotCards hotspots={currentPlan.hotspots} planId={activePlan} />
            )}
        </RoomShell>
    );
}



export default function RoomPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RoomContent />
        </Suspense>
    );
}
