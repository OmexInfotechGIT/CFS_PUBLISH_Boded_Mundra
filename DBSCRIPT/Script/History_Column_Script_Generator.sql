
--Note :- Please Make Changes according to your fields! (If Sub Query Required!)
--Note :- Please Remove columns that are not required!

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


DECLARE @TABLENAME VARCHAR(255), @UserName varchar(255)
SET @TABLENAME = 'trnDocument'
SET @UserName = 'Dhruvi'

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SELECT COLUMN_NAME  INTO #temp FROM  INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = +@TABLENAME+'_History'
DECLARE  @COLUMN_NAME varchar(Max), @Query varchar(Max), @counter int
SET @Counter = 0
SET @Query = ''
SET @Query += '
				-----------------------------------------------------------------------------------------------------------------------------
				-- Name: '+@UserName+'
				-- DATE: ' + Format([dbo].[GetCurrentDateTime](),'dd/MM/yyyy') + ' 
				-----------------------------------------------------------------------------------------------------------------------------
				'
print @Query
DECLARE Cursor_COLUMN_NAME CURSOR FOR
	select COLUMN_NAME from #temp

OPEN Cursor_COLUMN_NAME;
FETCH NEXT FROM Cursor_COLUMN_NAME INTO @COLUMN_NAME ;
WHILE @@FETCH_STATUS = 0
BEGIN 
	SET @Query = '
					IF not Exists(SELECT  * from  [CFS_BONDED_WAREHOUSE_History].[dbo].[History_Column] where [TableName] = '''+@TABLENAME+'_History'' and [LabelName] = '''+ @COLUMN_NAME +''' )
					Begin
					INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[History_Column] ([ColumnName], [LabelName], [TableName], [Flagdeleted], [CreatedDate])
					VALUES(''##ALIAS##'+ @COLUMN_NAME +''','''+ @COLUMN_NAME +''','''+@TABLENAME+'_History'',0,GETDATE())
					END
					
					-----------------------------------------------------------------------------------------------------------------------------
					'
	Print @Query
	EXEC ( @Query)  
	FETCH NEXT FROM Cursor_COLUMN_NAME INTO @COLUMN_NAME ;
	
END;

CLOSE Cursor_COLUMN_NAME;
DEALLOCATE Cursor_COLUMN_NAME;
 
Drop table #temp