<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $file = new SplFileObject('tableData.json', 'w');
    $file->fwrite($_POST['data']);
} else {
    $file = new SplFileObject('tableData.json');
    echo $file->fgets();
}
