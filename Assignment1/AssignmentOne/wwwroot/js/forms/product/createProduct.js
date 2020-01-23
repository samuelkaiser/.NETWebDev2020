var newProduct = [];

$('#newProductForm').on('submit', (e) => {
    e.preventDefault();

    newProduct.Name = $('#name').val();
    newProduct.Description = $('#description').val();
    newProduct.SupplierID = $('#supplierId').val();
    newProduct.CategoryID = $('#categoryId').val();
    newProduct.QuantityPerUnit = $('#quantityPerUnit').val();
    newProduct.UnitPrice = $('#unitPrice').val();
    newProduct.UnitsInStock = $('#unitsInStock').val();
    newProduct.UnitsOnOrder = $('#unitsOnOrder').val();
    newProduct.ReorderLevel = $('#unitsOnOrder').val();
    newProduct.Discontinued = $('#discontinued').val();

    console.log(newProduct);
});