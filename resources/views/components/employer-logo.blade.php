@props(['employer', 'width' => 90])

<img src="{{ asset($employer->logo) }}" alt="img" class="rounded-xl" width="{{ $width }}">