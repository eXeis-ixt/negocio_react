<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render('Home');
    }

    public function portolio(){
        $portfolios = Portfolio::latest()->get();
        return Inertia::render('Portfolio',[
            'portfolios' => $portfolios,
        ]);
    }
}
