USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnContainerDestuffWorkOrderDetails]    Script Date: 1/2/2024 4:24:53 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE TRIGGER  [dbo].[TGR_trnContainerDestuffWorkOrderDetails]   
 ON  [dbo].[trnContainerDestuffWorkOrderDetails]   
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
	 IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    
		
	END
	IF (EXISTS (SELECT * FROM Inserted p
			JOIN Deleted AS i ON
			p.[trnContainerDestuffWorkOrderDetailsID] = i.[trnContainerDestuffWorkOrderDetailsID]
			where 
				(p.[trnContainerDestuffWorkOrderID]<> i.[trnContainerDestuffWorkOrderID]
			OR p.[ContainerNo] <> i.[ContainerNo] 
			OR p.[trnContainerGateInDetailsID] <> i.[trnContainerGateInDetailsID] 
			OR p.[Size] <> i.[Size] 
			OR p.[Type] <> i.[Type] 
			OR p.[CargoType] <> i.[CargoType] 
			OR p.[ContainerLevel] <> i.[ContainerLevel] 
			OR p.[DestuffWOStatusTick] <> i.[DestuffWOStatusTick]		
			OR P.[Flagdeleted] <> i.[Flagdeleted])

		))
		BEGIN
			SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_HISTORY].[dbo].[trnContainerDestuffWorkOrderDetails_History]
							([trnContainerDestuffWorkOrderDetailsID],[trnContainerDestuffWorkOrderID],[ContainerNo],[trnContainerGateInDetailsID],[Size],[Type]
					,[CargoType],[ContainerLevel],[DestuffWOStatusTick],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption])
					SELECT [trnContainerDestuffWorkOrderDetailsID],[trnContainerDestuffWorkOrderID],[ContainerNo],[trnContainerGateInDetailsID],[Size],[Type]
				   ,[CargoType],[ContainerLevel],[DestuffWOStatusTick],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption FROM Inserted 
		END
  ELSE IF (NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnContainerDestuffWorkOrderDetailsID] = i.[trnContainerDestuffWorkOrderDetailsID]	
		and p.[trnContainerDestuffWorkOrderID] = i.[trnContainerDestuffWorkOrderID]
		and p.[ContainerNo] = i.[ContainerNo] 
		and p.[trnContainerGateInDetailsID] = i.[trnContainerGateInDetailsID] 
		and p.[Size] = i.[Size] 
		and p.[Type] = i.[Type] 
		and p.[CargoType] = i.[CargoType] 
		and p.[ContainerLevel] = i.[ContainerLevel] 
		and p.[DestuffWOStatusTick] = i.[DestuffWOStatusTick]		
		and P.[Flagdeleted] = i.[Flagdeleted]		
		and P.[UpdatedBy] = i.[UpdatedBy]
		and P.[UpdatedDate] = i.[UpdatedDate]
		and P.[Createdby] = i.[Createdby]
		and P.[CreatedDate] = i.[CreatedDate]
		and P.[Flagdeleted] = i.[Flagdeleted]		

	)  AND @Caption ='Insert') 
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_HISTORY].[dbo].[trnContainerDestuffWorkOrderDetails_History]
							([trnContainerDestuffWorkOrderDetailsID],[trnContainerDestuffWorkOrderID],[ContainerNo],[trnContainerGateInDetailsID],[Size],[Type]
							,[CargoType],[ContainerLevel],[DestuffWOStatusTick],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption])
					SELECT [trnContainerDestuffWorkOrderDetailsID],[trnContainerDestuffWorkOrderID],[ContainerNo],[trnContainerGateInDetailsID],[Size],[Type]
				   ,[CargoType],[ContainerLevel],[DestuffWOStatusTick],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption FROM Inserted 
	END   


GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrderDetails] ENABLE TRIGGER [TGR_trnContainerDestuffWorkOrderDetails]
GO


