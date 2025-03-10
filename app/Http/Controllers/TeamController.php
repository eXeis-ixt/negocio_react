<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamController extends Controller
{
    public function index(){
        return Inertia::render('Team/Index');
    }

    public function store(Request $request){
        $request->validate( [
            'team_name' => 'required|string|max:255|unique:teams,name',
            'manager_email' => 'required|email|max:255',
            'memberone_name' => 'required|string|max:255',
            'memberone_email' => 'required|email|max:255',
            'memberone_phone' => 'required|string|max:20',
            'membertwo_name' => 'nullable|string|max:255',
            'membertwo_email' => 'nullable|email|max:255',
            'membertwo_phone' => 'nullable|string|max:20',
            'memberthree_name' => 'nullable|string|max:255',
            'memberthree_email' => 'nullable|email|max:255',
            'memberthree_phone' => 'nullable|string|max:20',
            'memberfour_name' => 'nullable|string|max:255',
            'memberfour_email' => 'nullable|email|max:255',
            'memberfour_phone' => 'nullable|string|max:20',
            'memberfive_name' => 'nullable|string|max:255',
            'memberfive_email' => 'nullable|email|max:255',
            'memberfive_phone' => 'nullable|string|max:20',
        ]);

        $team = Team::create($request->all());

    }

}
