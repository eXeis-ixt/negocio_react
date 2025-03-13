<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TeamResource\Pages;
use App\Filament\Resources\TeamResource\RelationManagers;
use App\Models\Team;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use pxlrbt\FilamentExcel\Actions\Tables\ExportBulkAction;

class TeamResource extends Resource
{
    protected static ?string $model = Team::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('team_name')
                    ->required(),
                Forms\Components\TextInput::make('manager_email')
                    ->email()
                    ->required(),
                Forms\Components\TextInput::make('memberone_name')
                    ->required(),
                Forms\Components\TextInput::make('memberone_email')
                    ->email()
                    ->required(),
                Forms\Components\TextInput::make('memberone_phone')
                    ->tel(),
                Forms\Components\TextInput::make('membertwo_name')
                    ->required(),
                Forms\Components\TextInput::make('membertwo_email')
                    ->email()
                    ->required(),
                Forms\Components\TextInput::make('membertwo_phone')
                    ->tel(),
                Forms\Components\TextInput::make('memberthree_name'),
                Forms\Components\TextInput::make('memberthree_email')
                    ->email(),
                Forms\Components\TextInput::make('memberthree_phone')
                    ->tel(),
                Forms\Components\TextInput::make('memberfour_name'),
                Forms\Components\TextInput::make('memberfour_email')
                    ->email(),
                Forms\Components\TextInput::make('memberfour_phone')
                    ->tel(),
                Forms\Components\TextInput::make('memberfive_name'),
                Forms\Components\TextInput::make('memberfive_email')
                    ->email(),
                Forms\Components\TextInput::make('memberfive_phone')
                    ->tel(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('team_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('manager_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberone_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberone_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberone_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('membertwo_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('membertwo_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('membertwo_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberthree_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberthree_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberthree_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfour_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfour_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfour_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfive_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfive_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('memberfive_phone')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                ExportBulkAction::make(),
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTeams::route('/'),
            'create' => Pages\CreateTeam::route('/create'),
            'view' => Pages\ViewTeam::route('/{record}'),
            'edit' => Pages\EditTeam::route('/{record}/edit'),
        ];
    }
}
