USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [Admin].[TGR_UserPages]    Script Date: 12/06/2023 4:30:11 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-------------------------
ALTER TRIGGER  [Admin].[TGR_UserPages]   
 ON   [Admin].[UserPages]   
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
		p.[UserPagesID] = i.[UserPagesID]	and p.[UserGroupID] = i.[UserGroupID] and p.[PageMenuID] = i.[PageMenuID] and 
		p.[FlagView] = i.[FlagView] and p.[FlagAdd] = i.[FlagAdd] and  p.[FlagEdit] = i.[FlagEdit] and   
		p.[FlagDelete] = i.[FlagDelete] and p.[FlagApprove] = i.[FlagApprove]  
		and p.[FlagUnApprove] = i.[FlagUnApprove] 
		and p.[IsActive] = i.[IsActive] 
		and p.[flagDeleted] = i.[flagDeleted] 
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_HISTORY].[Admin].[UserPages_History]
							([UserPagesID]
							,[UserGroupID]
							,[PageMenuID]
							,[FlagView]
							,[FlagAdd]
							,[FlagEdit]
							,[FlagDelete]
							,[FlagApprove]
							,[FlagUnApprove]
							,[flagDeleted]
							,[IsActive]
							,[Createdby]
							,[CreatedDate]
							,[UpdatedBy]
							,[UpdatedDate]
							,[Caption])
		SELECT [UserPagesID]
           ,[UserGroupID]
           ,[PageMenuID]
           ,[FlagView]
           ,[FlagAdd]
           ,[FlagEdit]
           ,[FlagDelete]
           ,[FlagApprove]
           ,[FlagUnApprove]
           ,[flagDeleted]
           ,[IsActive]
           ,[Createdby]
           ,[CreatedDate]
           ,[UpdatedBy]
           ,[UpdatedDate]
		   ,@caption
			FROM Inserted 
	END    


GO

ALTER TABLE [Admin].[UserPages] ENABLE TRIGGER [TGR_UserPages]
GO


