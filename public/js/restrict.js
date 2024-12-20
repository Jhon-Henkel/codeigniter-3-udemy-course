$(function ()  {
    $("#btn_add_course").click(function () {
        clearErrors();
        $("#form_course")[0].reset();
        $("#course_img_path").attr("src", "");
        $("#modal_course").modal();
    })

    $("#btn_add_member").click(function () {
        clearErrors()
        $("#form_member")[0].reset();
        $("#member_img_path").attr("src", "");
        $("#modal_member").modal();
    })

    $("#btn_add_user").click(function () {
        clearErrors();
        $("#form_user")[0].reset();
        $("#modal_user").modal();
    })

    $("#btn_upload_course_image").change(function () {
        uploadImage($(this), $("#course_img_path"),  $("#course_img"));
    })

    $("#btn_upload_member_image").change(function () {
        uploadImage($(this), $("#member_img_path"),  $("#member_img"));
    })

    $("#form_course").submit(function () {
        $.ajax({
            type: "POST",
            url: BASE_URL + "restrict/ajax_save_course",
            dataType: "json",
            data: $(this).serialize(),
            beforeSend: function () {
                clearErrors();
                $("#btn_save_course").siblings(".help-block").html(loading("Salvando..."));
            },
            success: function (response) {
                clearErrors();
                if (response["status"] === 1) {
                    $("#modal_course").modal("hide");
                    swal.fire("Sucesso!", "Curso salvo com sucesso!", "success");
                    $("#dt_courses").DataTable().ajax.reload();
                } else {
                    showErrorsModal(response["error_list"]);
                }
            }
        })
        return false
    })

    $("#form_member").submit(function () {
        $.ajax({
            type: "POST",
            url: BASE_URL + "restrict/ajax_save_member",
            dataType: "json",
            data: $(this).serialize(),
            beforeSend: function () {
                clearErrors();
                $("#btn_save_member").siblings(".help-block").html(loading("Salvando..."));
            },
            success: function (response) {
                clearErrors();
                if (response["status"] === 1) {
                    $("#modal_member").modal("hide");
                    swal.fire("Sucesso!", "Membro salvo com sucesso!", "success");
                    $("#dt_team").DataTable().ajax.reload();
                } else {
                    showErrorsModal(response["error_list"]);
                }
            }
        })
        return false
    })

    $("#form_user").submit(function () {
        $.ajax({
            type: "POST",
            url: BASE_URL + "restrict/ajax_save_user",
            dataType: "json",
            data: $(this).serialize(),
            beforeSend: function () {
                clearErrors();
                $("#btn_save_user").siblings(".help-block").html(loading("Salvando..."));
            },
            success: function (response) {
                clearErrors();
                if (response["status"] === 1) {
                    $("#modal_user").modal("hide");
                    swal.fire("Sucesso!", "Usuário salvo com sucesso!", "success");
                    $("#dt_courses").DataTable().ajax.reload();
                } else {
                    showErrorsModal(response["error_list"]);
                }
            }
        })
        return false
    })

    $("#btn_your_user").click(function () {
        $.ajax({
            type: "POST",
            url: BASE_URL + "restrict/ajax_get_user_data",
            dataType: "json",
            data: {"user_id": $(this).attr("user_id")},
            success: function (response) {
                clearErrors();
                $("#form_user")[0].reset();
                $.each(response["input"], function (id, value) {
                    $("#"+id).val(value);
                })
                $("#modal_user").modal();
            }
        })
        return false
    })

    function activeBtnCourse() {
        $(".btn-edit-course").off("click").on("click",function () {
            $.ajax({
                type: "POST",
                url: BASE_URL + "restrict/ajax_get_course_data",
                dataType: "json",
                data: {"course_id": $(this).attr("course_id")},
                success: function (response) {
                    clearErrors();
                    $("#form_course")[0].reset();
                    $.each(response["input"], function (id, value) {
                        $("#"+id).val(value);
                    })
                    $("#course_img_path").attr("src", response["input"]["course_img"]);
                    $("#modal_course").modal();
                }
            })
            return false
        })
        $(".btn-del-course").off("click").on("click", function () {
            const btn = $(this)
            swal.fire({
                title: "Atenção",
                text: "Deseja realmente excluir este curso?",
                icon: "question",
                showCancelButton: true,
                cancelButtonText: "Não",
                confirmButtonColor: "#d9534f",
                confirmButtonText: "Sim",
            }).then(function (isConfirm) {
                if (isConfirm.value) {
                    $.ajax({
                        type: "POST",
                        url: BASE_URL + "restrict/ajax_delete_course_data",
                        data: {"course_id": btn.attr("course_id")},
                        success: function () {
                            swal.fire("Sucesso!", "Ação realizada com sucesso!", "success");
                            $("#dt_courses").DataTable().ajax.reload();
                        }
                    })
                }
            })
        })
    }

    $("#dt_courses").DataTable({
        oLanguage: DATATABLES_PT_BR,
        autoWidth: false,
        processing: true,
        serverSide: true,
        ajax: {
            url: BASE_URL + "restrict/ajax_list_courses",
            type: "POST"
        },
        columnDefs: [
            {targets: "no-sort", orderable: false},
            {targets: "dt-center", className: "dt-center"}
        ],
        drawCallback: function () {
            activeBtnCourse();
        }
    })

    function activeBtnMember() {
        $(".btn-edit-member").click(function () {
            $.ajax({
                type: "POST",
                url: BASE_URL + "restrict/ajax_get_member_data",
                dataType: "json",
                data: {"member_id": $(this).attr("member_id")},
                success: function (response) {
                    clearErrors();
                    $("#form_member")[0].reset();
                    $.each(response["input"], function (id, value) {
                        $("#"+id).val(value);
                    })
                    $("#member_img_path").attr("src", response["input"]["member_photo"]);
                    $("#modal_member").modal();
                }
            })
            return false
        })
        $(".btn-del-member").off("click").on("click", function () {
            const btn = $(this)
            swal.fire({
                title: "Atenção",
                text: "Deseja realmente excluir este membro?",
                icon: "question",
                showCancelButton: true,
                cancelButtonText: "Não",
                confirmButtonColor: "#d9534f",
                confirmButtonText: "Sim",
            }).then(function (isConfirm) {
                if (isConfirm.value) {
                    $.ajax({
                        type: "POST",
                        url: BASE_URL + "restrict/ajax_delete_member_data",
                        data: {"member_id": btn.attr("member_id")},
                        success: function () {
                            swal.fire("Sucesso!", "Ação realizada com sucesso!", "success");
                            $("#dt_team").DataTable().ajax.reload();
                        }
                    })
                }
            })
        })
    }

    $("#dt_team").DataTable({
        oLanguage: DATATABLES_PT_BR,
        autoWidth: false,
        processing: true,
        serverSide: true,
        ajax: {
            url: BASE_URL + "restrict/ajax_list_member",
            type: "POST"
        },
        columnDefs: [
            {targets: "no-sort", orderable: false},
            {targets: "dt-center", className: "dt-center"}
        ],
        drawCallback: function () {
            activeBtnMember();
        }
    })

    function activeBtnUser() {
        $(".btn-edit-user").click(function () {
            $.ajax({
                type: "POST",
                url: BASE_URL + "restrict/ajax_get_user_data",
                dataType: "json",
                data: {"user_id": $(this).attr("user_id")},
                success: function (response) {
                    clearErrors();
                    $("#form_user")[0].reset();
                    $.each(response["input"], function (id, value) {
                        $("#"+id).val(value);
                    })
                    $("#modal_user").modal();
                }
            })
            return false
        })
        $(".btn-del-user").off("click").on("click", function () {
            const btn = $(this)
            swal.fire({
                title: "Atenção",
                text: "Deseja realmente excluir este usuário?",
                icon: "question",
                showCancelButton: true,
                cancelButtonText: "Não",
                confirmButtonColor: "#d9534f",
                confirmButtonText: "Sim",
            }).then(function (isConfirm) {
                if (isConfirm.value) {
                    $.ajax({
                        type: "POST",
                        url: BASE_URL + "restrict/ajax_delete_user_data",
                        data: {"user_id": btn.attr("user_id")},
                        success: function () {
                            swal.fire("Sucesso!", "Ação realizada com sucesso!", "success");
                            $("#dt_users").DataTable().ajax.reload();
                        }
                    })
                }
            })
        })
    }

    $("#dt_users").DataTable({
        oLanguage: DATATABLES_PT_BR,
        autoWidth: false,
        processing: true,
        serverSide: true,
        ajax: {
            url: BASE_URL + "restrict/ajax_list_users",
            type: "POST"
        },
        columnDefs: [
            {targets: "no-sort", orderable: false},
            {targets: "dt-center", className: "dt-center"}
        ],
        drawCallback: function () {
            activeBtnUser();
        }
    })
})