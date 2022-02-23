'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProyectoXTecnologia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idproducto: {
        type: Sequelize.INTEGER
      },
      idtecnologia: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint("ProyectoXTecnologia", {
      type : "FOREIGN KEY",
      name : "FK_PROYECTOXTECNOLOGIA_PROYECTO",
      fields : ["idproducto"],
      references : {
        table : "Proyecto",
        field : "id"
      }
    })

    await queryInterface.addConstraint("ProyectoXTecnologia", {
      type : "FOREIGN KEY",
      name : "FK_PROYECTOXTECNOLOGIA_TECNOLOGIA",
      fields : ["idtecnologia"],
      references : {
        table : "Tecnologia",
        field : "id"
      }
    })

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("ProductoXTecnologia", "FK_PRODUCTOXTECNOLOGIA_TECNOLOGIA")
    await queryInterface.removeConstraint("ProductoXTecnologia", "FK_PRODUCTOXTECNOLOGIA_PRODUCTO")
    await queryInterface.dropTable('ProductoXTecnologia');
  }
};