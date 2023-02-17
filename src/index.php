<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Forma</title>
</head>
<body>
	<?php
	$product1 = 'чайник';
	$product2 = 'кипятильник';
	$product3 = 'кофейник';
	$price1 = 300;
	$price2 = 150;
	$price3 = 270;
	$avgprice = ($price1 + $price2 + $price3) / 3;
	echo ($product1 . "=>" . $price1); ?><br><?
	echo ($product2 . "=>" . $price2); ?><br><?
	echo ($product3 . "=>" . $price2); ?><br><?
	echo ("средняя цена товаров =>" . $avgprice);
	?>	
	<table>
		<tr>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
		</tr>
		<tr>

		</tr>
	</table>
</body>
</html>