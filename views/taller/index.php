<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $searchModel app\models\TallerSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Tallers';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="taller-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php Pjax::begin(); ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Taller', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],


              [
                  'attribute'=> 'nombre',
                   'label' => 'Taller',
                   'format' => 'raw',
                   'value' => function ($data) {
                            return Html::a('<strong> '. $data->nombre.'</strong>' , ['view', 'id' => $data->id]);
                        },
                ],

            'id',
            'nombre',
            'url_bucket:url',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
    <?php Pjax::end(); ?>
</div>
