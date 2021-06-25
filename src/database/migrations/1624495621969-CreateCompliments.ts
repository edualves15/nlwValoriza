import { query } from "express";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompliments1624495621969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid",
                    },
                    {
                        name: "user_receiver",
                        type: "uuid",
                    },
                    {
                        name: "tag_id",
                        type: "uuid",
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                    },
                ],
                // Criação dos relacionamentos entre tabelas - Forma 1:
                // Se a tabela referenciada for excluída ou modificada, estas foreignKeys seriam removidas/modificadas também
                // por terem sido criadas no mesmo comando 'createTable'
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        )
        // Criação dos relacionamentos entre tabelas - Forma 2:
        // Se a tabela referenciada for excluída ou modificada, estas foreignKeys teriam que ser removidas também no método down
        // await queryRunner.createForeignKey(
        //     "compliments",
        //     new TableForeignKey({
        //         name: "FKUserSenderCompliments",
        //         referencedTableName: "users",
        //         referencedColumnNames: ["id"],
        //         columnNames: ["user_sender"],
        //         onDelete: "SET NULL",
        //         onUpdate: "SET NULL"
        //     })
        // )
        // await queryRunner.createForeignKey(
        //     "compliments",
        //     new TableForeignKey({
        //         name: "FKUserReceiverCompliments",
        //         referencedTableName: "users",
        //         referencedColumnNames: ["id"],
        //         columnNames: ["user_receiver"],
        //         onDelete: "SET NULL",
        //         onUpdate: "SET NULL"
        //     })
        // )
        // await queryRunner.createForeignKey(
        //     "compliments",
        //     new TableForeignKey({
        //         name: "FKTagCompliments",
        //         referencedTableName: "tags",
        //         referencedColumnNames: ["id"],
        //         columnNames: ["tag_id"],
        //         onDelete: "SET NULL",
        //         onUpdate: "SET NULL"
        //     })
        // )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
