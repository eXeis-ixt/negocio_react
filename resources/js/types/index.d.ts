import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    url: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface TeamProps{
    team_name?:  string
        manager_email?: string,
        memberone_name?: string,
        memberone_email?: string,
        memberone_phone?: string,
        membertwo_name:?  string
        membertwo_email?: string,
        membertwo_phone?: string,
        memberthree_name?: string,
        memberthree_email?: string,
        memberthree_phone?: string,
        memberfour_name?: string,
        memberfour_email?: string,
        memberfour_phone?: string,
        memberfive_name:?  string
        memberfive_email:?  string
        memberfive_phone?: string,
}
