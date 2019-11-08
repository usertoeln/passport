<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('./css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('./css/fontawesome/css/all.min.css') }}">
    <title>Document</title>
</head>
<body>
    <div id="app">
        {{--<panel></panel>--}}
        <sidebar></sidebar>
    </div>
</body>

{{--<script src="{{ asset('./js/manifest.js') }}"></script>--}}
{{--<script src="{{ asset('./js/vendor.js') }}"></script>--}}
{{--<script src="{{ asset('./js/app.js') }}"></script>--}}
<script src="{{ asset('./js/sidebar.js') }}"></script>
</html>
