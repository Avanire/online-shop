<div>
    <div>Имя: {{ $name }}</div>
    <div>Телефон: {{ $phone }}</div>
    <div>Email: {{$email}}</div>
    <div>Доставка: {{$delivery}}</div>
    <div>Оплата: {{$payment}}</div>

    <table>
        <thead>
        <td>Название</td>
        <td>Цена</td>
        <td>Кол-во</td>
        </thead>
        @foreach(json_decode($products) as $product)
            <tr>
                <td>{{$product->name}}</td>
                <td>{{$product->price}}</td>
                <td>{{$product->count}}</td>
            </tr>
        @endforeach
    </table>
</div>
