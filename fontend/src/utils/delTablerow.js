export function delTableRow(data, index, row, func) {
    if (!row.hasOwnProperty('id')) {
        //[Vue warn]: Error in v-on handler: "TypeError: Cannot read property '$confirm' of undefined"
        //调用不了this
        this.$confirm('数据未保存,确定删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                data.splice(index, 1)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
    } else {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                data.splice(index, 1)
                func(row.id, {
                    is_delete: 1
                }).then(res => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                })
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: '删除失败!'
                })
            })
    }
}