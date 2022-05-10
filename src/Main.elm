module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Events exposing (onClick)


type alias Composition =
    { title : String
    , composer : String
    , publisher : String
    , parts : String
    , qty : Int
    }


type alias Model =
    { compositions : List Composition }


type alias Flags =
    { compositions : List Composition }


init : Flags -> ( Model, Cmd Msg )
init initialValue =
    ( initialValue, Cmd.none )


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update _ model =
    ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div []
        (model.compositions
            |> List.map
                (\composition ->
                    div [] [ text composition.title ]
                )
        )


main : Program Flags Model Msg
main =
    Browser.element { init = init, update = update, view = view, subscriptions = \_ -> Sub.none }
