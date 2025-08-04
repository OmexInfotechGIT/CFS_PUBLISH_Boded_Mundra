USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnEmptyContainerOutGatePassDetails]    Script Date: 01/08/2024 6:19:46 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-------------------------
ALTER TRIGGER  [dbo].[TGR_trnEmptyContainerOutGatePassDetails]   
 ON  [dbo].[trnEmptyContainerOutGatePassDetails]   
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    
		
	END
	IF NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnEmptyContainerOutGatePassDetailsID] = i.[trnEmptyContainerOutGatePassDetailsID]	
		and p.[trnEmptyContainerOutGatePassID] = i.[trnEmptyContainerOutGatePassID]
		and p.trnEmptyContainerOutWODetailsID = i.trnEmptyContainerOutWODetailsID 
		and p.[ContNo] = i.[ContNo] 
		and p.[Condition] = i.[Condition]
		and p.[ConditionRemarks] = i.[ConditionRemarks]
		and p.[MovetoLocationID] = i.[MovetoLocationID]
		and p.[MovetoLocation] = i.[MovetoLocation] 
		and p.[Flagdeleted] = i.[Flagdeleted]
		and p.[Createdby] = i.[Createdby]
		and p.[CreatedDate] = i.[CreatedDate]
		and p.[UpdatedBy] = i.[UpdatedBy]
		and p.[UpdatedDate] = i.[UpdatedDate]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnEmptyContainerOutGatePassDetails_History]
							([trnEmptyContainerOutGatePassDetailsID],[trnEmptyContainerOutGatePassID],trnEmptyContainerOutWODetailsID,[ContNo],[Condition],[ConditionRemarks]
							,[MovetoLocationID],[MovetoLocation],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption])
					SELECT [trnEmptyContainerOutGatePassDetailsID],[trnEmptyContainerOutGatePassID],trnEmptyContainerOutWODetailsID,[ContNo],[Condition],[ConditionRemarks]
							,[MovetoLocationID],[MovetoLocation],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption FROM Inserted 
	END    


GO

ALTER TABLE [dbo].[trnEmptyContainerOutGatePassDetails] ENABLE TRIGGER [TGR_trnEmptyContainerOutGatePassDetails]
GO


